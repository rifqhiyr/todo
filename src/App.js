import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/Layout/HomePage";
import About from "./components/page/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
      </Router>
    );
  }
}
export default App;
