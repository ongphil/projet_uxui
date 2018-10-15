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
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import AttractionsComponent from "./components/pages/AttractionsComponent";
import BatimentsComponent from "./components/pages/BatimentsComponent";
import PersonnelComponent from "./components/pages/PersonnelComponent";
import MaintenancesComponent from "./components/pages/MaintenancesComponent";
import StatsComponent from "./components/pages/StatsComponent";
import logo from "./resources/images/logo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "main"
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
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
                <Col sm="2">
                  <Nav className="ml-auto App-nav pt-4" vertical>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/attractions"
                        className={`App-navlink mx-1 ${
                          this.state.currentPage === "attractions"
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
                        <Col xs="auto">
                          Attractions
                        </Col>
                      </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/batiments"
                        className={`App-navlink mx-1 ${
                          this.state.currentPage === "batiments"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                      <Row className="navbar-item">
                        <Col xs="2">
                        <FontAwesomeIcon icon={faHotel} className="mr-2" />
                        </Col>
                        <Col xs="auto">
                          Bâtiments
                        </Col>
                      </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/personnel"
                        className={`App-navlink mx-1 ${
                          this.state.currentPage === "personnel"
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
                        <Col xs="auto">
                          Personnel
                        </Col>
                      </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/maintenances"
                        className={`App-navlink mx-1 ${
                          this.state.currentPage === "maintenances"
                            ? "App-navlink-selected"
                            : ""
                        }`}
                      >
                      <Row className="navbar-item">
                        <Col xs="2">
                          <FontAwesomeIcon icon={faWrench} className="mr-2" />
                        </Col>
                        <Col xs="auto">
                          Maintenances
                        </Col>
                      </Row>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/stats"
                        className={`App-navlink mx-1 ${
                          this.state.currentPage === "stats"
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
                          <Col xs="auto">
                            Stats
                          </Col>
                        </Row>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm="10">
                  <Route
                    exact
                    path="/attractions"
                    component={() => (
                      <AttractionsComponent
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                      />
                    )}
                  />
                  <Route
                    path="/batiments"
                    component={() => (
                      <BatimentsComponent
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                      />
                    )}
                  />
                  <Route
                    path="/personnel"
                    component={() => (
                      <PersonnelComponent
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                      />
                    )}
                  />
                  <Route
                    path="/maintenances"
                    component={() => (
                      <MaintenancesComponent
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                      />
                    )}
                  />
                  <Route
                    path="/stats"
                    component={() => (
                      <StatsComponent
                        currentPage={this.state.currentPage}
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
