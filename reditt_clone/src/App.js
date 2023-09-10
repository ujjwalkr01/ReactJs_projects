import "./App.css";
import Navigatonbar from "./components/Navbar/Navigatonbar";
import Home from "./components/HomePage/Home";
// import { Routes, Route } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import LogInModal from "./components/Modal/LogInModal";

export const ModalCtx = createContext();
export const CheckLogInStat = createContext();
export const ThemeTogglerCtx = createContext();
function App() {
  const [showModal, setShowModal] = useState(false);
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const [toggleTheme, setToggleTheme] = useState(false);
  if (toggleTheme) {
    document.body.style = "background: rgb(44, 44, 44); color:#fff;";
  } else {
    document.body.style = "";
  }
  const isLoggedIn = sessionStorage.getItem("logInStatus");
  return (
    // <div>
    <ThemeTogglerCtx.Provider value={{ toggleTheme, setToggleTheme }}>
      <CheckLogInStat.Provider value={{ setIsNotLoggedIn, isLoggedIn }}>
        <ModalCtx.Provider value={{ setShowModal }}>
          <Navigatonbar />
          {isNotLoggedIn && !isLoggedIn && <Home />}
          {showModal && !isLoggedIn && <LogInModal />}
        </ModalCtx.Provider>
      </CheckLogInStat.Provider>
    </ThemeTogglerCtx.Provider>
    // {/* </div> */}
  );
}

export default App;
