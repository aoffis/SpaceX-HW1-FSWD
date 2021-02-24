import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RocketPage from "./component/rocket.js";
import LauchPage from "./component/launches";
import HomePage from "./component/home";
import InfoLaunch from "./component/info-la";
import InfoRocket from "./component/info-ro";

function App() {
  return (
    <>

      <Router>
        <Navbar collapseOnSelect expand="md" variant="dark" bg="black">
          <Link to="/">
            <Navbar.Brand>
              <img src="https://svgshare.com/i/UQD.svg"
              width="240px"
              height="30px"
              className="d-inline-block align-top"></img>
            </Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto pt-2">
                <Nav.Link href="/rocket">Rocket</Nav.Link>
                <Nav.Link href="/launches">Launches</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/rocket">
            <RocketPage />
          </Route>
          <Route path="/launches">
            <LauchPage />
          </Route>
          <Route path="/info-la/:Id">
            <InfoLaunch />
          </Route>
          <Route path="/info-ro/:rocketId">
            <InfoRocket />
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
