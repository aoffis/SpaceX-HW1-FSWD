import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import RocketPage from "./component/rocket.js";
import LauchPage from "./component/lauches";
import HomePage from "./component/home";

function App() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a>
            <Link class="navbar-brand" to="/">
              SpaceX
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/rocket">
                  Rocket
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/lauches">
                  Launches
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rocket">
            <RocketPage />
          </Route>
          <Route path="/lauches">
            <LauchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
