import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/Child1/3">Child1</Link>
          <Link to="/Child2">Child2</Link>
          <Link to="/Child2">Child3</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Child1/:number" component={Child1} />
            <Route exact path="/Child2" component={Child2} />
            <Route exact path="/Child2" component={Child2} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
