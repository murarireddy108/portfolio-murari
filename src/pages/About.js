import React from "react";
import abtimg from "../my photos/aboutmyphoto-min.jpg";
import "./About.css";
function About() {
  return (
    <div className="container card pt-5 lead" id="abt">
      <div class="row justify-content-center">
        <div class="col card-img-top m-auto">
          <div class=" h-100 card-img-top">
            <img
              src={abtimg}
              class="card-img-top bg-light shadow-lg"
              alt="Photo"
              style={{
                borderRadius: "50%",
                transition: "ease-in",
                transitionDelay: "0.2s",
              }}
            />
          </div>
        </div>
        <div className="hr"></div>
        <div class="col m-auto" style={{ maxWidth: "550px" }}>
          <div>
            <div class="card-body">
              <span
                class="card-title fs-2 bold myname"
                style={{ color: "blueviolet" }}
              >
                Hello👋
              </span>
              <hr />
              <p class="card-text">
                 I am a MERN Stack Developer from Ballari, Karnataka in India. I
                love to create web apps that would make life easy and enjoyable
                for people. I have just completed Full Stack development at Guvi Geeks 
                Network 💻 of IIT-M, Chennai.
              </p>
              <p>
                I like to interact with people, listen to new ideas 💡. I am
                always open to have talk about anything and look forward to
                connect with you 🤝. Feel free to contact me here. ⤵️{" "}
              </p>
              <div class="d-flex flex-row-reverse" id="sw">
                <a type="button" class="btn btn-secondary but" href="#con">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
