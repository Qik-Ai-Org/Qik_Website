import React from "react";

const ComingSoonSection = ({ title, setShowEducation }) => (
  <div>
    <h5 style={{ marginBottom: "30px" }}>
      <button
        style={{
          float: "left",
          backgroundColor: "transparent",
          borderColor: "transparent",
          outlineColor: "transparent",
          outline: "none",
        }}
        onClick={() => setShowEducation("mainSection")}
      >
        <i className="fa fa-angle-left"> </i>
        <span
          style={{
            fontSize: "14px",
            color: "#000",
            fontWeight: "normal",
            marginRight: "40px",
          }}
        >
          Back
        </span>
      </button>
      {title}
    </h5>
    <div className="col-md-12" id="products">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{ color: "#00abf6", fontWeight: "bold" }}>Coming Soon...</h1>
        </div>
        <div className="col-md-4 col-sm-4 col-4"> </div>
        <div className="col-md-4 col-sm-4 col-4"> </div>
        <div className="col-md-4 col-sm-4 col-4"> </div>
      </div>
    </div>
  </div>
);

export default ComingSoonSection;
