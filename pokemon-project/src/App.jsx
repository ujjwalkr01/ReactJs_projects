import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import ExpandedContent from "./components/ExpandedContent";

export const ShowDetailsContext = createContext();
export const PokemonDataContext = createContext();

export function App() {
  const [showModel, setShowModal] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    if (showModel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModel]);

  return (
    <main id="parent">
      <ShowDetailsContext.Provider value={{ setShowModal }}>
        <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
          <PokemonContainer />
          {showModel && (
            <div className="opaquescreen">
              <ExpandedContent />
            </div>
          )}
        </PokemonDataContext.Provider>
      </ShowDetailsContext.Provider>
    </main>
  );
}
