// Libs & Frameworks
import styled from "styled-components";
import { Link } from "react-router-dom";

// Style
const Parent = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 0px;

  .about-game,
  .games,
  .rules,
  .home {
    width: 175px;
    height: 60px;
    background: #0000008f;
    border-radius: 0 50px 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 3px solid #d90368;
    border-left: none;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &:hover {
      background: #ffffff;
      color: #000;
    }
  }

  .home {
    transform: translateX(-175px);
    animation: about 0.5s linear;
    transition: 0.5s;
  }

  .games {
    width: 225px;
    transform: translateX(-225px);
    transition: 0.8s;
  }

  .rules {
    width: 275px;
    transform: translateX(-275px);
    transition: 1.1s;
  }

  .about-game {
    width: 325px;
    transform: translateX(-325px);
    transition: 1.3s;
  }

  .open-about,
  .open-games,
  .open-rules,
  .open-home {
    transform: translateX(0);
  }
`;

// JSX
const NavLinks = ({ about, games, rules, home, closeLinksHandler }) => {
  return (
    <Parent>
      <Link to="/" className={home} onClick={() => closeLinksHandler()}>
        Home
      </Link>
      <Link to="/games" className={games} onClick={() => closeLinksHandler()}>
        The Stages
      </Link>
      <Link to="/rules" className={rules} onClick={() => closeLinksHandler()}>
        The Rules
      </Link>
      <Link to="/about" className={about} onClick={() => closeLinksHandler()}>
        About The Game
      </Link>
    </Parent>
  );
};

export default NavLinks;
