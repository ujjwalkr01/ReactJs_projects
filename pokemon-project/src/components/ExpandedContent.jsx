import { useContext } from "react";
import "./ExpandedContent.css";
import { PokemonDataContext, ShowDetailsContext } from "../App";
import "./PokemonThumbnail.css";

const ExpandedContent = () => {
  const { setShowModal } = useContext(ShowDetailsContext);
  const { pokemonData } = useContext(PokemonDataContext);
  console.log(pokemonData);
  return (
    <aside className={`expanded-overlay ${pokemonData.type}`}>
      <div className="expanded-left">
        <img
          className="expanded-image"
          src={pokemonData.image}
          alt={pokemonData.name}
        />
        <p className="expanded-name">{pokemonData.name}</p>
      </div>
      <div className={`expanded-right ${pokemonData.type}`}>
        <div className="expanded-description">
          <p><span>Weight: </span>{pokemonData.weight}</p>
          <p><span>Height: </span>{pokemonData.height}</p>
        </div>
        <div className="expanded-stat">
          {pokemonData.stats.map((ele, index) => {
            return (
              <p key={index}>
                <span>Stat{index + 1}: </span>{ele.stat.name}
              </p>
            );
          })}
        </div>
        <div className="expanded-baseStat">
          {pokemonData.stats.map((ele, index) => {
            return (
              <p key={index}>
                <span>Bs{index + 1}: </span>{ele.base_stat}
              </p>
            );
          })}
        </div>
      </div>
      <button className={`close-button ${pokemonData.type}-button`} onClick={() => setShowModal(false)}>
        x
      </button>
    </aside>
  );
};
export default ExpandedContent;
