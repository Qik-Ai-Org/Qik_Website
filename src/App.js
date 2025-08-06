import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Academy from "./components/Academy.js";
import Navigation from "./components/Navigation.js";
import Business from "./components/Business.js";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <div style={{ display: "none" }}>
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Academy" element={<Academy />} />
            <Route path="/Business" element={<Business />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
