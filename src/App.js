import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Academy" component={Academy} />
            <Route path="/Business" component={Business} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
