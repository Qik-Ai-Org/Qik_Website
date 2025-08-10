import React from "react";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-4">
          <a href="/">
            <img
              src="./images/logo.png"
              alt="Qik.ai Logo - Complete Business Cloud Stack"
              className="img-logovs"
            />
          </a>
        </div>
        <div className="col-md-8 col-sm-8 col-8 text-right">
          <div className="us-contact">
            <i className="fa fa-envelope" /> hello@qik.ai
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
