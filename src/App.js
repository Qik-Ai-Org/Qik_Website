import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation.js";
import Business from "./components/Business.js";
import About from "./components/home/About";
import Contact from "./components/Contact";

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
            <Route path="/Business" element={<Business />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
