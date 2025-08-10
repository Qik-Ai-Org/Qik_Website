import React from "react";

const TabNavigation = ({ activeTab, setActiveTab, setShowEducation }) => (
  <div className="tab-navigation">
    <button
      className={`tab-button ${activeTab === "businessSolutions" ? "active" : ""}`}
      onClick={() => {
        setActiveTab("businessSolutions");
        setShowEducation("businessSolutions");
      }}
    >
      Business Solutions
    </button>
    <button
      className={`tab-button ${activeTab === "industries" ? "active" : ""}`}
      onClick={() => {
        setActiveTab("industries");
        setShowEducation("mainSection");
      }}
    >
      Industries
    </button>
  </div>
);

export default TabNavigation;
