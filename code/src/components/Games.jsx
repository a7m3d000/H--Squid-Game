// Libs & Frameworks
import styled from "styled-components";
import { Carousel, Container } from "react-bootstrap";

// Files
import logo from "../images/logo.jpg";
import gameOne from "../images/game-one.png";
import gameTwo from "../images/game-two.png";
import gameThree from "../images/game-three.png";
import gameFour from "../images/game-four.png";
import gameFive from "../images/game-five.png";
import gameSix from "../images/game-six.png";
import marble from "../images/marble.png";
import doll from "../images/doll.png";
import glassCleaner from "../images/glass-cleaner.png";
import rope from "../images/rope.png";
import squid from "../images/squid.png";
import cracker from "../images/cracker.png";

// Style
const Parent = styled.section`
  position: relative;
  overflow: hidden;

  .games-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000cc;
    z-index: 1;
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

  .line {
    position: absolute;
    z-index: 6;
    width: 100%;
    height: 100%;
    background: #e91e63;
    clip-path: polygon(0 100%, 0 50%, 100% 100%);

    transform: rotate(90deg);
    animation: line 1.7s 3s ease-in-out forwards;
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

  .carousel {
    .i {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }

  .carousel-item {
    overflow: hidden;
  }

  .carousel-indicators {
    padding: 1rem;
    padding-bottom: 3rem;
    margin: 0;
    height: 100%;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;
    justify-content: center;
    z-index: 7;

    button {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center center;
      background-color: #fff;
      border: 2px solid #d90368;
      transition: 0.5s;
      opacity: 1;

      &:hover {
        background-color: #fff;
      }
    }

    button.active {
      background-color: #d90368;
      border: 2px solid #fff;
      height: 75px;
      width: 75px;
      transform: translateX(7%);
    }

    button:nth-child(1) {
      background-image: url("${doll}");
    }

    button:nth-child(2) {
      background-image: url("${cracker}");
    }

    button:nth-child(3) {
      background-image: url("${rope}");
    }

    button:nth-child(4) {
      background-image: url("${marble}");
    }

    button:nth-child(5) {
      background-image: url("${glassCleaner}");
    }

    button:nth-child(6) {
      background-image: url("${squid}");
    }

    @media screen and (max-width: 425px) {
      bottom: 10px;
      padding: 1rem;
      flex-direction: row;
      gap: 5px;
      width: 100%;
      bottom: 0;
      height: fit-content;
      padding-bottom: 2rem;
      button,
      button:nth-child(1) {
        height: 40px;
        width: 40px;
        border-width: 2px;
      }

      button.active {
        height: 45px;
        width: 45px;
      }
    }
  }

  .game-body {
    top: 2.5rem;
    z-index: 6;
    width: fit-content;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);

    img {
      height: 100%;
    }

    p {
      width: 1400px;
      padding: 2rem;
      padding-top: 5em;
      font-size: 1.4rem;
      line-height: 2;

      @media screen and (max-width: 1440px) {
        width: 1250px;
        padding-top: 3.5em;
        font-size: 1.3rem;
        padding-right: 50px;
        word-break: break-all;
      }

      @media screen and (max-width: 1024px) {
        width: 900px;
        padding-top: 3.5em;
        font-size: 1.3rem;
        padding-right: 50px;
        word-break: break-all;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.05rem;
        padding-right: 110px;
        width: auto;
      }

      @media screen and (max-width: 576px) {
        padding: 1rem;
        padding-top: 2rem;
        font-size: 0.7rem;
      }
    }

    @media screen and (max-width: 768px) {
      top: 8.5rem;
    }
  }

  .twelve {
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-align: center;
      margin: auto;
      white-space: nowrap;
      padding-bottom: 13px;
      position: relative;
      width: fit-content;
      padding: 0;
      top: 1rem;

      &:before {
        background-color: #c50000;
        content: "";
        display: block;
        height: 3px;
        width: 75px;
        top: -20px;
        position: absolute;
      }

      &:after {
        background-color: #c50000;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 3px;
        width: 75px;
        bottom: -20px;
        position: absolute;
      }

      @media screen and (max-width: 576px) {
        font-size: 1.2rem;
        top: 0rem;
      }
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
`;

// JSX
const Games = ({ openLinkHandler, overlayClass, setOverlayClass }) => {
  return (
    <Parent>
      <div className="games-overlay"></div>
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
      <Carousel className="carousel" interval={20000}>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameOne} alt="Game One" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Red Light & Green Light
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  The first game in the Squid Game is played by children all
                  around the world. It’s the type of game that, the bigger the
                  group, the better It gets. In Red Light, Green Light, a
                  predetermined area is set and while one player (the leader)
                  stands in one end, with their back turned to the rest of the
                  group, all the others can move. The lone player chants “red
                  light, green light, one two three”, and everyone can move.
                  When they get to “three”, however, everyone has to freeze. If
                  anyone is caught moving, they’re either out or have to go back
                  to the starting line. The game is simple, and you just have to
                  move from point A to point B without being “seen”, but rules
                  vary. In most cases, the ultimate goal is to get past the
                  leader when their back is turned. In others, you have to touch
                  the tree in which the leader is leaning without being caught
                  moving. In Squid Game, the leader is a giant doll that lets
                  players move when her head is turned to a big tree.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameTwo} alt="ame Two" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Sugar Honeycombs
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  Probably one of the hardest games in Squid Game, Sugar
                  Honeycombs is frustrating for players because you can’t rely
                  on strength, manipulation or taking advantage of other
                  players. The key to making past Round 2 is… patience. And,
                  turns out, a whole bunch of saliva. In this game, each player
                  gets a circular tin that can be opened up to reveal a sugar
                  honeycomb with one of four different shapes modelled into it:
                  a circle, a triangle, a star or an umbrella. Armed with
                  nothing but a needle, the players have to carve out the shapes
                  without breaking their design – if the shape doesn’t come out
                  whole, the player is killed. Simple, right? The only problem
                  is: the sugar honeycomb is extremely fragile, and can break in
                  pieces if you’re not careful.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameThree} alt="Game Three" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Tug of War
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  Easily one of the best rounds in Squid Game, the tug of war
                  challenges each group of players into using all their strength
                  and the best of their skills to make the other group fall to
                  their death. There is only one rule: pulling on a thick rope
                  to make the opposing team fall past the center mark. In order
                  to make that happen, anything goes: psyching out the adversary
                  group, pulling with all your strength, and other techniques.
                  As Il-nam (O Yeong-su) points out, tug of war doesn’t
                  necessarily have to be about which group is stronger. There
                  are ways to win even if you don’t have bulking members in your
                  group, such as waiting for the opponents to get tired before
                  using all your strength, placing team members on different
                  sides of the rope, and using your full body weight to your
                  advantage, as opposed to just your upper body’s.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameFour} alt="Game Four" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Marbles
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  In Squid Game, this round is used more as an episode to take a
                  breather while getting to know some characters better than as
                  a challenging entry in the competition. Each player is given a
                  bag containing ten marbles and then they are all divided in
                  pairs. The goal is to win every marble your opponent has, but,
                  as they quickly figure out, that between themselves and the
                  person they chose to pair up with (usually the person they
                  have become closest to), one of them will die. From the very
                  first game, all players knew that most of them weren’t going
                  to make it to the end, but this was the first time they were
                  directly responsible for the death of someone they cared about
                  in the competition, since the pairs were chosen by themselves.
                  Players are authorized to use any minigame to win, from
                  throwing marbles on a hole to guessing how many marbles the
                  other player is holding on their closed hands.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameFive} alt="Game Five" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Hopscotch
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  Round 5 is a variation of one of the most popular children’s
                  games. In the original hopscotch, you jump from one square to
                  another, avoid some of them along the way and then make your
                  way back. In Squid Game, however, there is quite literally no
                  going back. Players have to jump their way through a bridge
                  that has two glass squares side by side. While one glass
                  square is tempered and will hold up to two players at a time,
                  the square beside it is fragile and whoever jumps on it falls
                  to their death. The “fun” part is figuring out which is which
                  in sixteen minutes or less. With this game, each player does
                  not have equal advantage, the first player has no prior
                  knowledge of which side to take, whereas the last player has
                  seen 15 players make the right or wrong decision, making their
                  challenge simply to get over the bridge in time.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 i" src={gameSix} alt="Game Six" />
          <Container>
            <Carousel.Caption className="game-body">
              <div class="twelve">
                <h1 className="animate__animated animate__rubberBand animate__delay-1s">
                  Squid Game
                </h1>
                <p className="animate__animated animate__fadeInDown animate__delay-2s animate__slower">
                  The final round features a popular child’s game that,
                  according to The Front Man (Lee Byung-hun), is one of the most
                  violent games that Korean kids used to play. The game is
                  played by drawing a square, a triangle and two circles on the
                  ground (the same shapes seen throughout the whole series) and
                  has two teams trying to invade each other’s space. The tricky
                  part is: you can’t touch any lines and must hop on one foot on
                  most areas. Of course, players will try their best to make you
                  fall along the way.
                </p>
              </div>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel>
    </Parent>
  );
};
export default Games;
