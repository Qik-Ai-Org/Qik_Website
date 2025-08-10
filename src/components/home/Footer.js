import React from "react";

const Footer = () => (
  <footer id="footer" className="animated animatedFadeInDown fadeInDown">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>
              <a href="/">
                <img src="./images/logo.svg" alt="Qik.ai Logo" />
              </a>
            </h4>
            <p>
              Supercharge your business with 50+ integrated business
              applications. With Qik Cloud Stack, you can speedup, automate
              and bring transparency to your business activities. Experience
              the power of cloud to increase your business productivity by
              20%.
            </p>
          </div>
          <div className="col-md-4 text-center-uvs">
            <h4>Contact</h4>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                marginTop: "20px",
              }}
            >
              <li style={{ marginBottom: "13px" }}>Email: hello@qik.ai</li>
            </ul>
          </div>
          <div className="col-md-4 text-right-uvs">
            <h4>Always reachable on</h4>
            <div className="social-links" style={{ marginTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  outlineColor: "transparent",
                  outline: "none",
                }}
              >
                <img
                  src="./images/linkedin.svg"
                  alt="Business solution icon"
                />
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  outlineColor: "transparent",
                  outline: "none",
                }}
              >
                <img
                  src="./images/gmail.svg"
                  alt="Business solution icon"
                  style={{ marginLeft: "20px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="containervs">
      <div className="copyright">
        <p style={{ textAlign: "center" }}>
          All rights reserved © 2025
          <strong>
            <span>
              <a href="/" target="_blank">
                Qik.Ai
              </a>
            </span>
          </strong>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
