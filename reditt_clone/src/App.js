import "./App.css";
import Navigatonbar from "./components/Navbar/Navigatonbar";
import Home from "./components/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import React, { useState, useContext, createContext, useEffect } from "react";
import LogInModal from "./components/Modal/LogInModal";
import ProfilePage from "./components/pages/ProfilePage";
import AfterLogInHomePage from "./components/pages/AfterLogInHomePage";

export const ModalCtx = createContext();
export const CheckLogInStat = createContext();
export const ThemeTogglerCtx = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const [toggleTheme, setToggleTheme] = useState(false);

  if (toggleTheme) {
    document.body.style = "background: rgb(63, 63, 63); color:#fff;";
  } else {
    document.body.style = "background: white; color:black;";
  }

  const isLoggedIn = sessionStorage.getItem("logInStatus");
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));

  return (
    <>
      <ThemeTogglerCtx.Provider value={{ toggleTheme, setToggleTheme }}>
        <CheckLogInStat.Provider value={{ setIsNotLoggedIn, isLoggedIn }}>
          <ModalCtx.Provider value={{ setShowModal }}>
            <Navigatonbar />
            {isNotLoggedIn && !isLoggedIn && <Home />}
            {showModal && !isLoggedIn && <LogInModal />}
            <Routes>
              {!isNotLoggedIn && isLoggedIn && (
                <Route path={`/user/${userName}`} element={<ProfilePage />} />
              )}
              <Route
                path={`/user/home=true`}
                element={<AfterLogInHomePage />}
              />
            </Routes>
          </ModalCtx.Provider>
        </CheckLogInStat.Provider>
      </ThemeTogglerCtx.Provider>
    </>
  );
}

export default React.memo(App);
