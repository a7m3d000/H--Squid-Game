// Libs & Frameworks
import styled from "styled-components";

// Files
import logo from "../images/logo.jpg";
import rulesImage from "../images/4.png";

// Style
const Parent = styled.section`
  position: relative;
  overflow: hidden;

  .rules-overlay {
    width: 100%;
    height: 100%;
    background: #000000cc;
    position: absolute;
  }

  .logo {
    position: absolute;
    width: 75px;
    height: 75px;
    z-index: 8;
    border-radius: 50%;
    left: 3rem;
    top: 3rem;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      transition: 0.5s !important;

      &:hover {
        cursor: pointer;
        transform: rotate(-10deg) scale(1.07) translateY(1px);
      }
    }

    @media screen and (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%) !important;
      top: 1.5rem;
    }
  }

  .rules-img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  .thirteen {
    width: 100%;
    h1 {
      position: absolute;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0px;
      text-transform: uppercase;
      text-align: center;
      white-space: nowrap;
      border: 2px solid #fff;
      top: 5rem;
      left: 50% !important;
      transform: translateX(-50%);
      color: #fff;
      padding: 1rem;

      &:before {
        background-color: #d90368;
        position: absolute;
        content: "";
        height: 10px;
        width: 10px;
        border-radius: 50%;
        bottom: 12px;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
      }

      &:after {
        background-color: #d90368;
        position: absolute;
        content: "";
        height: 10px;
        width: 10px;
        border-radius: 50%;
        bottom: 12px;
        right: -25px;
        top: 50%;
        transform: translateY(-50%);
      }

      @media screen and (max-width: 768px) {
        top: 9rem !important;
      }
    }
  }

  .rules {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.5rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      align-items: flex-start;
      list-style: none;

      li {
        text-align: start;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 40px;
          height: 40px;
          background: #d90368;
          left: -60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #fff;
        }
      }

      @media screen and (max-width: 1024px) {
        padding-top: 11rem;
        gap: 30px;
        width: 100%;

        li {
          width: 100%;
        }
      }

      @media screen and (max-width: 576px) {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      width: 75%;
      right: 0;
    }
  }

  .line {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e91e63;
    clip-path: polygon(0 100%, 0 50%, 100% 100%);

    transform: rotate(90deg);
    animation: line 1.7s 2s ease-in-out forwards;
    transform-origin: right bottom;

    @keyframes line {
      0% {
        transform: rotate(-90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

// JSX
const Rules = ({ openLinkHandler, overlayClass, setOverlayClass }) => {
  return (
    <Parent>
      <div className="rules-overlay"></div>
      <div className="line"></div>
      <div
        className="logo animate__animated animate__jackInTheBox animate__delay-1s"
        onClick={() => {
          openLinkHandler();
          setOverlayClass(overlayClass + " top-overlay-open");
        }}
      >
        <img src={logo} alt="Pink Soldier" />
      </div>
      <img src={rulesImage} alt="" className="rules-img" />
      <div class="thirteen">
        <h1>RULES</h1>
      </div>

      <div className="rules">
        <ul>
          <li className="animate__animated animate__backInLeft">
            No player can stop the game
          </li>
          <li className="animate__animated animate__backInLeft animate__delay-1s">
            If a player refuses to play, he will be disqualified
          </li>
          <li className="animate__animated animate__backInLeft animate__delay-2s">
            The game ends if the majority of players agree
          </li>
        </ul>
      </div>
    </Parent>
  );
};

export default Rules;
