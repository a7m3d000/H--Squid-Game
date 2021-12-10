// Basic
import { useEffect, useState } from "react";

// Libs & Frameworks
import styled from "styled-components";

// Files
import logo from "../images/logo.jpg";
import aboutImage from "../images/2.jpeg";

// Style
const Parent = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .about-overlay {
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

  .about-img {
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

  p {
    margin: auto;
    position: absolute;
    font-size: 1.5rem;
    top: 0;
    color: #fff;
    word-break: break-all;
    padding: 1rem;
    padding-top: 17rem;
    width: 70%;
    line-height: 2;
    left: 50%;
    transform: translateX(-50%) !important;

    @media screen and (max-width: 576px) {
      width: 100%;
      font-size: 1.2rem;
      padding-top: 15rem;
    }
  }

  .line {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e91e63;
    clip-path: polygon(0 100%, 0 50%, 100% 100%);

    transform: rotate(90deg);
    animation: line 1.7s 0.5s ease-in-out forwards;
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
const About = ({ openLinkHandler, overlayClass, setOverlayClass }) => {
  let [aboutParaText, setAboutParaText] = useState("");

  useEffect(() => {
    let j = 0;
    const aboutText = `The squid game is an ancient game played by children in South Korea, so
    named because the shape of the game is similar to squid. Netflix decided
    to make a series of the same name, which was a huge success. The game
    consists of 6 games and consists of 456 players who must be left with
    one player at the end to win approximately 42 million US dollars.`;

    setTimeout(() => {
      let aboutTextAnimation = setInterval(() => {
        if (j >= aboutText.length - 1) {
          clearInterval(aboutTextAnimation);
        }

        setAboutParaText((aboutParaText += aboutText[j]));
        j++;
      }, 25);
    }, 500);
  }, []);

  return (
    <Parent>
      <div className="about-overlay"></div>
      <div
        className="logo animate__animated animate__jackInTheBox animate__delay-1s"
        onClick={() => {
          openLinkHandler();
          setOverlayClass(overlayClass + " top-overlay-open");
        }}
      >
        <img src={logo} alt="Pink Soldier" />
      </div>
      <div className="line"></div>
      <img src={aboutImage} alt="" className="about-img" />
      <div class="thirteen">
        <h1>ABOUT GAME</h1>
      </div>
      <p>{aboutParaText}</p>
    </Parent>
  );
};

export default About;
