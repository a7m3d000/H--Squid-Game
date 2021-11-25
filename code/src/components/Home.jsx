// Basic
import { useEffect } from "react";

// Libs  Frameworks
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

// Files
import logo from "../images/logo.jpg";
import trailer from "../images/trailer.mp4";

// Style
const Parent = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;

  .overlay {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: #0000007a;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      position: absolute;
      background-image: linear-gradient(90deg, transparent 15%, #000 70%);
    }
  }

  .logo {
    position: absolute;
    width: 75px;
    height: 75px;
    z-index: 6;
    border-radius: 50%;
    left: 2rem;
    top: 1.5rem;
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

  .trailer {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    left: 0;
  }

  .heading {
    position: absolute;
    z-index: 4;
    top: 3rem;
    right: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 500px;

    h1 {
      font-family: "Major Mono Display";
      color: #fff;
      font-size: 4em;
      text-align: end;

      .q,
      .a,
      .e,
      .i {
        color: #d90368;
      }
    }

    p {
      font-size: 0.95em;
      color: #fff;
      font-family: "Oxygen";
      padding: 0.5rem;
      padding-top: 3rem;
      text-align: start;
      width: 100%;
      line-height: 2;
    }

    .progressing {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: 11px;

      .progress {
        background: rgba(255, 255, 255, 0.1);
        justify-content: flex-start;
        border-radius: 100px;
        align-items: center;
        position: relative;
        padding: 0 3px;
        display: flex;
        height: 7px;
        width: 100%;
      }

      .progress-value-one {
        animation: load-one 3s normal 2.5s forwards;
        box-shadow: 0 10px 40px -10px #d90368;
        border-radius: 100px;
        background: #d90368;
        height: 5px;
      }

      .progress-value-two {
        animation: load-two 3s normal 2.5s forwards;
        box-shadow: 0 10px 40px -10px #d90368;
        border-radius: 100px;
        background: #d90368;
        height: 5px;
      }

      .progress-value-three {
        animation: load-three 3s normal 2.5s forwards;
        box-shadow: 0 10px 40px -10px #d90368;
        border-radius: 100px;
        background: #d90368;
        height: 5px;
      }

      @keyframes load-one {
        0% {
          width: 0;
        }
        100% {
          width: 30%;
        }
      }

      @keyframes load-two {
        0% {
          width: 0;
        }
        100% {
          width: 60%;
        }
      }

      @keyframes load-three {
        0% {
          width: 0;
        }
        100% {
          width: 90%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      justify-content: center;
      align-items: center;
      width: 100%;
      left: 0;
      padding: 1rem;
      padding-top: 5rem;

      h1,
      p {
        text-align: center;
        padding: 0;
      }

      .progress {
        width: 75% !important;
      }

      .progressing {
        gap: 8px;
      }
    }

    .btn11 {
      top: 500px;
      position: absolute !important;
      z-index: 5;
      padding: 20px 90px;
      margin: 0 10px;
      display: inline-block;
      text-decoration: none;
      font-family: "proxima-nova", sans-serif;
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase !important;
      letter-spacing: 2px;
      color: #fff;
      cursor: hand;
      text-align: center;
      text-transform: capitalize;
      border-radius: 0px;
      position: relative;
      overflow: hidden !important;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background: transparent !important;
      border-radius: 15px;
    }

    .btn11:hover {
      border: 1px solid #transparent;
      color: #80ffd3 !important;
      border: 1px solid #fff;
    }

    .btn11::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #d90368;
      position: absolute;
      left: 0%;
      opacity: 1;
      top: 0;
      z-index: -12;
      -webkit-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -moz-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -o-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .btn11::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: #80ffd3;
      position: absolute;
      left: 0%;
      opacity: 1;
      top: 0;
      z-index: -15;
      -webkit-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -moz-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      -o-transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
      transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .btn11:hover::before,
    .btn11:hover::before {
      opacity: 1;
      -webkit-transform: translateX(100%);
      -moz-transform: translateX(100%);
      -ms-transform: translateX(100%);
      transform: translateX(100%);
    }

    .btn11:hover::after,
    .btn11:hover::after {
      opacity: 1;
      -webkit-transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

// JSX
const Home = ({ openLinkHandler, overlayClass, setOverlayClass }) => {
  useEffect(() => {
    const PARA = document.querySelector(".main-para"),
      PARA_TEXT = ` 6 games for 42 million dollars, how long will you live miserable and
                      you have a valuable opportunity to become one of the richest people?
                      Let's play  : ) 🟥🔺🔴`;

    let i = 0;

    setTimeout(() => {
      const TIMER = setInterval(function () {
        PARA.textContent += PARA_TEXT[i];

        if (i < PARA_TEXT.length - 1) {
          i++;
        } else {
          clearInterval(TIMER);
        }
      }, 13);
    }, 3000);
  }, []);

  return (
    <Parent>
      <div className="overlay"></div>

      <div
        className="logo animate__animated animate__jackInTheBox animate__delay-1s"
        onClick={() => {
          openLinkHandler();
          setOverlayClass(overlayClass + " top-overlay-open");
        }}
      >
        <img src={logo} alt="Pink Soldier" />
      </div>

      <video src={trailer} className="trailer" loop autoPlay muted></video>

      <div className="heading">
        <h1>
          <span className="i animate__animated animate__fadeInDownBig animate__delay-2s">
            S
          </span>
          <span className="q animate__animated animate__fadeInDownBig">Q</span>
          <span className="animate__animated animate__fadeInDownBig animate__delay-1s">
            U
          </span>
          <span className="i animate__animated animate__fadeInDownBig animate__delay-2s">
            I
          </span>
          <span className="animate__animated animate__fadeInDownBig animate__delay-1s">
            D
          </span>{" "}
          <span className="animate__animated animate__fadeInDownBig animate__delay-2s">
            G
          </span>
          <span className="a animate__animated animate__fadeInDownBig animate__delay-1s">
            A
          </span>
          <span className="animate__animated animate__fadeInDownBig animate__delay-2s">
            M
          </span>
          <span className="e animate__animated animate__fadeInDownBig animate__delay-1s">
            E
          </span>
        </h1>

        <div className="progressing">
          <div className="progress">
            <div className="progress-value-three"></div>
          </div>
          <div className="progress">
            <div className="progress-value-two"></div>
          </div>
          <div className="progress">
            <div className="progress-value-one"></div>
          </div>
        </div>
        <p className="main-para"></p>

        <a
          href="#"
          className="btn11 animate__animated animate__fadeInDown animate__slower	animate__delay-5s"
          onClick={() => {
            openLinkHandler();
            setOverlayClass(overlayClass + " top-overlay-open");
          }}
        >
          <span>Learn More</span>
          <div className="transition"></div>
        </a>
      </div>
    </Parent>
  );
};

export default Home;
