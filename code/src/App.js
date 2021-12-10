// Basic
import { useState } from "react";

// Libs & Frameworks
import styled from "styled-components";
import Games from "./components/Games";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

// Components
import Home from "./components/Home";
import NavLinks from "./components/NavLinks";
import Rules from "./components/Rules";
import About from "./components/About";

// Style
const Parent = styled.div`
  text-align: center;

  .top-overlay {
    min-width: 100vw;
    min-height: 100vh;
    background: #000000bf;
    position: absolute;
    z-index: 9;
    display: none;
  }

  .top-overlay-open {
    display: block;
  }
`;

// JSX
function App() {
  const [about, setAbout] = useState("about-game");
  const [games, setGames] = useState("games");
  const [rules, setRules] = useState("rules");
  const [home, setHome] = useState("home");
  const [overlayClass, setOverlayClass] = useState("top-overlay");

  const openLinkHandler = () => {
    setAbout(about + " open-about");
    setGames(games + " open-games");
    setRules(rules + " open-rules");
    setHome(home + " open-home");
  };

  const closeLinksHandler = () => {
    setAbout("about-game");
    setGames("games");
    setRules("rules");
    setHome("home");
    setOverlayClass("top-overlay");
  };

  return (
    <HashRouter>
      <Parent>
        <div
          className={overlayClass}
          onClick={() => {
            closeLinksHandler();
          }}
        ></div>
        <NavLinks
          home={home}
          about={about}
          games={games}
          rules={rules}
          closeLinksHandler={closeLinksHandler}
        />

        <Switch>
          <Route exact path="/">
            <Home
              openLinkHandler={openLinkHandler}
              overlayClass={overlayClass}
              setOverlayClass={setOverlayClass}
            />
          </Route>

          <Route path="/games">
            <Games
              openLinkHandler={openLinkHandler}
              overlayClass={overlayClass}
              setOverlayClass={setOverlayClass}
            />
          </Route>

          <Route path="/rules">
            <Rules
              openLinkHandler={openLinkHandler}
              overlayClass={overlayClass}
              setOverlayClass={setOverlayClass}
            />
          </Route>
          <Route path="/about">
            <About
              openLinkHandler={openLinkHandler}
              overlayClass={overlayClass}
              setOverlayClass={setOverlayClass}
            />
          </Route>
        </Switch>
      </Parent>
    </HashRouter>
  );
}

export default App;
