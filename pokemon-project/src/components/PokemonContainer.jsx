import React, { useEffect, useState } from "react";
import "../App.css";
import PokemonThumbnail from "./PokemonThumbnail.jsx";

const PokemonContainer = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  const fetchPokemonData = async (url) => {
    setLoadingState(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      //   console.log(data);
      setPokemonData([...pokemonData, ...data[0].results]);
      setNextUrl(data[0].next);
      //   console.log(data[0].results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchPokemonData(
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
  }, []);

  const handleClickBtn = () => {
    fetchPokemonData(nextUrl);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-part-1">
          <h2>Pokemon</h2>
          <h2 className="second-h2">Pokemon</h2>
        </div>
        <div className="header-part-2">
          <h2>KingDom</h2>
          <h2 className="Second-h2">KingDom</h2>
        </div>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="detail-wrapper">
          <section id="section">
            {pokemonData.length > 0 && (
              <div className="all-container">
                {pokemonData.map(({ name, url }, indx) => {
                  return <PokemonThumbnail key={indx} name={name} url={url} />;
                })}
              </div>
            )}
          </section>
          <button className="load-more" onClick={handleClickBtn}>
            More Pokemons
          </button>
        </section>
      )}
    </>
  );
};
export default PokemonContainer;
