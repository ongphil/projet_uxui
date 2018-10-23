import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpaceShuttle,
  faHotel,
  faUserFriends,
  faWrench,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import DataArray from "./components/DataArray";
import Stats from "./components/Stats";
import logo from "./resources/images/logo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "main",
      currentNavItemSelected: "main"
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentNavItemSelected: page
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <div>
                <Navbar className="App-navbar" expand="md">
                  <NavbarBrand
                    className="App-navbarbrand"
                    tag={Link}
                    to="/"
                    onClick={() => this.changePage("home")}
                  >
                    <img src={logo} alt="logo" height="32" />
                  </NavbarBrand>
                </Navbar>
              </div>
            </header>
            <div>
              <Row noGutters>
                <Col sm="2" md="2">
                  <Nav className="ml-auto App-nav pt-4" vertical>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/attractions"
                        className={`App-navlink mx-1 ${
                          this.state.currentNavItemSelected === "attractions"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                        <Row className="navbar-item">
                          <Col xs="2">
                            <FontAwesomeIcon
                              icon={faSpaceShuttle}
                              className="mr-2"
                            />
                          </Col>
                          <Col xs="auto">Attractions</Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/batiments"
                        className={`App-navlink mx-1 ${
                          this.state.currentNavItemSelected === "batiments"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                        <Row className="navbar-item">
                          <Col xs="2">
                            <FontAwesomeIcon icon={faHotel} className="mr-2" />
                          </Col>
                          <Col xs="auto">Bâtiments</Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/personnel"
                        className={`App-navlink mx-1 ${
                          this.state.currentNavItemSelected === "personnel"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                        <Row className="navbar-item">
                          <Col xs="2">
                            <FontAwesomeIcon
                              icon={faUserFriends}
                              className="mr-2"
                            />
                          </Col>
                          <Col xs="auto">Personnel</Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/maintenances"
                        className={`App-navlink mx-1 ${
                          this.state.currentNavItemSelected === "maintenances"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                        <Row className="navbar-item">
                          <Col xs="2">
                            <FontAwesomeIcon icon={faWrench} className="mr-2" />
                          </Col>
                          <Col xs="auto">Maintenances</Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/stats"
                        className={`App-navlink mx-1 ${
                          this.state.currentNavItemSelected === "stats"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                        <Row className="navbar-item">
                          <Col xs="2">
                            <FontAwesomeIcon
                              icon={faChartLine}
                              className="mr-2"
                            />
                          </Col>
                          <Col xs="auto">Stats</Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm="8" md="10">
                  <Route
                    exact
                    path="/attractions"
                    component={() => (
                      <DataArray
                        currentPage="Attractions"
                        currentNavItemSelected={
                          this.state.currentNavItemSelected
                        }
                        changePage={this.changePage}
                        headlings={["Nom", "Date", "Prix de l'entrée (€)", " "]}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/batiments"
                    component={() => (
                      <DataArray
                        currentPage="Bâtiments"
                        currentNavItemSelected={
                          this.state.currentNavItemSelected
                        }
                        changePage={this.changePage}
                        headlings={["Nom", "Date", " "]}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/personnel"
                    component={() => (
                      <DataArray
                        currentPage="Personnel"
                        currentNavItemSelected={
                          this.state.currentNavItemSelected
                        }
                        changePage={this.changePage}
                        headlings={[
                          "Nom",
                          "Prénom",
                          "Age",
                          "Fonction",
                          "Salaire (€ brut)",
                          " "
                        ]}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/maintenances"
                    component={() => (
                      <DataArray
                        currentPage="Maintenances"
                        currentNavItemSelected={
                          this.state.currentNavItemSelected
                        }
                        changePage={this.changePage}
                        headlings={[
                          "Dernière maintenance",
                          "Prochaine maintenance",
                          "Attraction",
                          "Technicien",
                          " "
                        ]}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/stats"
                    component={() => (
                      <Stats
                        currentPage="Stats"
                        currentNavItemSelected={
                          this.state.currentNavItemSelected
                        }
                        changePage={this.changePage}
                      />
                    )}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
