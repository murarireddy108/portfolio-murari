import React from "react";

function Cardgroup({ image1, image2 }) {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100" style={{ maxWidth: "350px" }}>
            <img src={image1} alt="..." className="border" />
            <div class="card-body text-center">
              <h5 class="card-title">Business Developer</h5>
              <p class="card-text">
                2 years of experience on <u>Point Of Sales </u> softwares and
                also as practicing, testing, and exploring new features of other
                out sourcing companies.
              </p>
            </div>
            <div class="card-footer text-center">
              <a
                class="btn btn-secondary"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/sakthi-solutions/about/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="LinkedIn of Sakthi Solutions"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100" style={{ maxWidth: "350px" }}>
            <img src={image2} alt="..." className="border" />
            <div class="card-body text-center">
              <h5 class="card-title">R & T</h5>
              <p class="card-text">
                1 year of experience as an R & T specialist in{" "}
                <u>Fund Report Transaction Department</u>. An intermediary who
                takes care of the back-end processes of a mutual fund.
              </p>
            </div>
            <div class="card-footer text-center" id="con">
              <a
                class="btn btn-secondary"
                href="https://www.linkedin.com/company/sundaram-finance/"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="LinkedIn of SMF"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardgroup;
