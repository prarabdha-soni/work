import React from "react";
import { IconButton, Button } from "@material-ui/core";
import {
  LinkedIn,
  Twitter,
  GitHub,
  Instagram,
  Email,
} from "@material-ui/icons";

import JavaScript from "../assets/tech/javascript.svg";
import ReactSVG from "../assets/tech/react.svg";
import Node from "../assets/tech/node-js-logo.svg";
import Express from "../assets/tech/express.svg";
import PostgreSQL from "../assets/tech/postgresql.svg";
import HTML from "../assets/tech/html.svg";
import CSS from "../assets/tech/css.svg";
import Sass from "../assets/tech/sass.svg";
import Git from "../assets/tech/git.svg";
import Terminal from "../assets/tech/terminal.svg";

// Projects Image
import Project1 from "../assets/projects/project-a.png";
import Project2 from "../assets/projects/project-b.png";
import Project3 from "../assets/projects/project-c.png";
import Project4 from "../assets/projects/project-d.png";
import Project5 from "../assets/projects/project-e.png";
import Project6 from "../assets/projects/project-f.png";
import Project7 from "../assets/projects/project-g.png";

import ProfilePic from "../assets/ProfilePic.jpeg";

const SinglePage = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="ProfilePic">
          <img
            alt="prarabdha"
            src={ProfilePic}
            width="100%"
            height="100%"
            // sx={{ width: 112, height: 112 }}
          />
        </div>

        <h2>
          <span className="normal-text">
            Hi, <br />
            My name is{" "}
          </span>
          <span className="hightlight-text"> Prarabdha Soni.</span> <br />
          <span className="normal-text">I build for the </span>{" "}
          <span className="hightlight-text">
            <span class="word w1">Web.</span>
            <span class="word w2">Frontend.</span>
            <span class="word w3">Backend.</span>
          </span>
        </h2>

        <div className="social-icons">
          <a href="https://github.com/prarabdha-soni" target="_blank" rel="noreferrer">
            <IconButton style={{ color: "#000066" }} size="medium">
              <GitHub />
            </IconButton>
          </a>

          <a
            href="https://linkedin.com/in/prarabdha-soni"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <LinkedIn />
            </IconButton>
          </a>

          <a
            href="https://twitter.com/PrarabdhaSoni"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <Twitter />
            </IconButton>
          </a>

          <a
            href="https://instagram.com/prarabdha_soni"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <Instagram />
            </IconButton>
          </a>

          <a href="mailto:prarabdha21@gmail.com" target="_blank" rel="noreferrer">
            <IconButton style={{ color: "#000066" }} size="medium">
              <Email />
            </IconButton>
          </a>
        </div>

        <br />
        <div className="tech-stack" style={{ width: "fit-content" }}>
          <hr />
          <img
            src={JavaScript}
            alt="JavaScipt"
            title="JavaScript"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={ReactSVG}
            alt="React"
            title="React.js"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Node}
            alt="Node"
            title="Node.js"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Express}
            alt="Express"
            title="Express.js"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={PostgreSQL}
            alt="PostgreSQL"
            title="PostgreSQL"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <br />
          <img
            src={HTML}
            alt="HTML"
            title="HTML"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={CSS}
            alt="CSS"
            title="CSS"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Sass}
            alt="Sass"
            title="Sass"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Git}
            alt="Git"
            title="Git"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Terminal}
            alt="Terminal"
            title="Terminal"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
        </div>
      </div>

      <div className="main">
        <h1>Portfolio</h1>
        <div className="container">
          <div className="project">
            <img src={Project1} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project2} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project3} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project4} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Design
                </Button>
              </a>
              {/* <br />
              <br /> */}
              {/* <Button
                variant="contained"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#0099ff",
                  color: "#ffffff",
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Source Code
              </Button> */}
            </div>
          </div>
          <div className="project">
            <img src={Project5} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Design
                </Button>
              </a>
              {/* <br />
              <br /> */}
              {/* <Button
                variant="contained"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#0099ff",
                  color: "#ffffff",
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Source Code
              </Button> */}
            </div>
          </div>
          {/*<div className="project">
            <img src={Project6} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a href="https://prarabdha-soni.github.io/portfolio">
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  
                </Button>
              </a>
            </div>
                </div>*/}
          <div className="project">
            <img src={Project7} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  Install Theme
                </Button>
              </a>
              <br />
              <br />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
