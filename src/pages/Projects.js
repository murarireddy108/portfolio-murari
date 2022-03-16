import React from "react";
import Carousel from "../components/Carousel";
import spotify1  from "../projects images/spotify1 (1).png";
import spotify2 from "../projects images/spotify1 (2).png";
import spotify3 from "../projects images/spotify1 (3).png";
import spotify4 from "../projects images/spotify1 (4).png";
import CMS1 from "../projects images/CMS1.png";
import CMS2 from "../projects images/CMS2.png";
import CMS3 from "../projects images/CMS3.png";
import CMS4 from "../projects images/CMS4.png";
import CMS5 from "../projects images/CMS5.png";
import CMS6 from "../projects images/CMS6.png";

import netflix1 from "../projects images/netflix1.png";
import netflix2 from "../projects images/netflix2.png";
import netflix3 from "../projects images/netflix3.png";

function Projects() {
  return (
    <div className="container card py-3 lead" id="pf">
      <div class="align-self-center">
        <div class="card-body ">
          <h5
            class="card-title text-center fs-2  myname lead p-3"
            style={{ color: "blueviolet" }}
          >
            Portfolio
          </h5>
          {/* carousel */}
          <div
            class="card container p-3 m-3"
            style={{
              maxWidth: "750px",
              maxHeight: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="exp"
          >
            <div className="card-header m-2">CMS-APP</div>
            <Carousel
              url1={CMS1}
              url2={CMS2}
              url3={CMS3}
              url4={CMS4}
              url5={CMS5}
              url6={CMS6}
            />
            <div>
              <p>
              A CMS typically has two major components: a content management application (CMA),
               as the front-end user interface that allows a user, even with limited expertise,
                to add, modify, and remove content from a website without the intervention of a webmaster; 
                and a content delivery application (CDA), that compiles the content and updates the website
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/murarireddy108/CMS-APP"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://amazing-visvesvaraya-7c92d.netlify.app"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
          <div
            class="card container p-3 m-3"
            style={{
              maxWidth: "750px",
              maxHeight: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="exp"
          >
            {" "}
            <div className="card-header m-2">Netflix Clone</div>
            <Carousel
              url1={netflix1}
              url2={netflix2}
              url3={netflix3}
              url4={netflix1}
              url5={netflix2}
            />
            <div>
              <p>
                This is a Movie trailer app to view few movies' trailers with
                YouTube library and used themoviedb api to fetch movie dat
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/murarireddy108/netflix"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://vibrant-bassi-490b79.netlify.app"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
          <div
            class="card container p-3 m-3"
            style={{
              maxWidth: "750px",
              maxHeight: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="exp"
          >
            <div className="card-header m-2">spotify clone App</div>
            <Carousel
              url1={spotify1}
              url2={spotify2}
              url3={spotify3}
              url4={spotify4}
             // url5={msg5}
            />
            <div>
              <p>
              In Spotify's apps, music can be browsed or searched for via various parameters,
               such as artist, album, genre, playlist, or record label.
                Users can create, edit and share playlists, share tracks on social media,
                 and make playlists with other users.
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/murarireddy108/SPOTIFY"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://amazing-visvesvaraya-77c92d.netlify.app"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
