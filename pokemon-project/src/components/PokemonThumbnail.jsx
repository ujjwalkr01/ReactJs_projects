import { useContext, useEffect, useState } from "react";
import "./PokemonThumbnail.css";
import { PokemonDataContext, ShowDetailsContext } from "../App";

const PokemonThumbnail = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const { setShowModal } = useContext(ShowDetailsContext);
  const { setPokemonData } = useContext(PokemonDataContext);

  const fetchUrlFromPokemonData = async () => {
    try {
      const resp = await fetch(props.url);
      const data = await resp.json();
      // console.log(data);
      setPokemonInfo(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUrlFromPokemonData();
  }, []);

  const handleKnowMoreBtn = () => {
    setShowModal(true);
    setPokemonData(pokemonInfo);
  };

  return (
    <section className={`thumb-container ${pokemonInfo.type}`}>
      <p className="number">#{pokemonInfo.id}</p>
      <img src={pokemonInfo.image} alt={pokemonInfo.name} />
      <h3>{pokemonInfo.name}</h3>
      <small>Type: {pokemonInfo.type}</small>
      <br />
      <button
        className={`${pokemonInfo.type}-button`}
        onClick={handleKnowMoreBtn}
      >
        Know more...
      </button>
    </section>
  );
};

export default PokemonThumbnail;
