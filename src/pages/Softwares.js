import React from "react";
import "./Software.css";
import html from "../skill images/html.png";
import bootstrap from "../skill images/bootstrap.png";
import css from "../skill images/css-3.png";
import ex from "../skill images/ex.jpg";
import git from "../skill images/git-logo.png";
import js from "../skill images/js.png";
import mongo from "../skill images/mongo.png";
import mui from "../skill images/MUI.png";
import node from "../skill images/node.jpeg";
import react from "../skill images/react.png";

function Softwares() {
  return (
    <div class="card d-grid gap-2 py-5">
      <div class=" align-self-center">
        <div class="card-body">
          <h5
            class="card-title text-center fs-2 lead p-3 myname"
            style={{ color: "blueviolet" }}
          >
            My Software Skills
          </h5>
          <div class=" p-3">
            <div class="row gap-3 justify-content-lg-evenly">
              <div class="col ">
                <div className="skills">
                  <img src={html} alt="skills" />
                  <span>HTML5</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img src={css} alt="skills" />
                  <span>CSS3</span>
                </div>
              </div>

              <div class="col">
                <div className="skills">
                  <img src={js} alt="skills" />
                  <span>JS</span>
                </div>
              </div>

              <div class="col">
                <div className="skills">
                  <img src={react} alt="skills" />
                  <span>ReactJS</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img
                    src="https://evanpoe.github.io/portfolio/images/express-logo.png"
                    alt="..."
                  />
                  <span>ExpressJS</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img src={mongo} alt="skills" />
                  <span>MongoDb</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img src={node} alt="skills" />
                  <span>NodeJS</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img src={git} class="bg-dark rounded" alt="..." />
                  <span>GitHUb</span>
                </div>
              </div>
              <div class="col">
                <div className="skills">
                  <img src={bootstrap} alt="skills" />
                  <span>Bootstrap5</span>
                </div>
              </div>
              <div class="col car">
                <div className="skills">
                  <img src={mui} alt="skills" />
                  <span id="pf">Material-UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Softwares;
