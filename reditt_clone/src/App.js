import "./App.css";
import Navigatonbar from "./components/Navbar/Navigatonbar";
import Home from "./components/HomePage/Home";
// import { Routes, Route } from "react-router-dom";
import { useState, useContext, createContext } from "react";
import LogInModal from "./components/Modal/LogInModal";

export const ModalCtx = createContext();
export const CheckLogInStat = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const isLoggedIn = sessionStorage.getItem("logInStatus");
  return (
    <div>
      <CheckLogInStat.Provider value={{ setIsNotLoggedIn }}>
        <ModalCtx.Provider value={{ setShowModal }}>
          <Navigatonbar />
          {isNotLoggedIn && !isLoggedIn && <Home />}
          {showModal && !isLoggedIn && <LogInModal />}
        </ModalCtx.Provider>
      </CheckLogInStat.Provider>
    </div>
  );
}

export default App;
