import "./App.css";
import Navigatonbar from "./components/Navbar/Navigatonbar";
import Home from "./components/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import LogInModal from "./components/Modal/LogInModal";
import AfterLogInHomePage from "./components/pages/AfterLogInHomePage";
import UserProfilePage from "./components/pages/UserProfilePage";
import PremiumPage from "./components/pages/PremiumPage";
import ComingSoonPage from "./components/pages/ComingSoonPage";

export const ModalCtx = createContext();
export const CheckLogInStat = createContext();
export const ThemeTogglerCtx = createContext();
export const CommunityListCtx = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(true);
  const [toggleTheme, setToggleTheme] = useState(false);
  const [searchCommunityList, setSearchCommunityList] = useState([]);

  const isLoggedIn = sessionStorage.getItem("logInStatus");
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  // background: rgb(18, 18, 18);
  // color: #d8d8d8;
  if (isLoggedIn && !toggleTheme) {
    document.body.style = "background: rgb(179, 194, 206);";
  } else if (isLoggedIn && toggleTheme) {
    document.body.style = "background: rgb(44, 44, 44); color:#d8d8d8;";
  } else if (!isLoggedIn) {
    document.body.style = "background:white; color:black";
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  return (
    <>
      <ThemeTogglerCtx.Provider value={{ toggleTheme, setToggleTheme }}>
        <CheckLogInStat.Provider value={{ setIsNotLoggedIn, isLoggedIn }}>
          <ModalCtx.Provider value={{ setShowModal }}>
            <CommunityListCtx.Provider
              value={{ setSearchCommunityList, searchCommunityList }}
            >
              <Navigatonbar />
              {showModal && !isLoggedIn && <LogInModal />}
              <Routes>
                {isNotLoggedIn && !isLoggedIn && (
                  <Route path="" element={<Home />} />
                )}
                <Route
                  path={`/user/home=true`}
                  element={<AfterLogInHomePage />}
                />
                <Route
                  path={`/user/${userName}`}
                  element={<UserProfilePage />}
                />
                <Route path={`/premium`} element={<PremiumPage />} />
                <Route path={`/blank`} element={<ComingSoonPage />} />
              </Routes>
            </CommunityListCtx.Provider>
          </ModalCtx.Provider>
        </CheckLogInStat.Provider>
      </ThemeTogglerCtx.Provider>
    </>
  );
}

export default React.memo(App);
