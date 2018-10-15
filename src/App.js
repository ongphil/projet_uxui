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
import AttractionComponent from "./components/pages/AttractionComponent";
import BatimentComponent from "./components/pages/BatimentComponent";
import PersonnelComponent from "./components/pages/PersonnelComponent";
import MaintenanceComponent from "./components/pages/MaintenanceComponent";
import StatComponent from "./components/pages/StatComponent";
import logo from './resources/images/logo.png';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'main'
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <div>
                <Navbar className="App-navbar" expand="md">
                  <NavbarBrand className="App-navbarbrand" tag={Link} to="/" onClick={()=>this.changePage('home')}>
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
                        className={`App-navlink mx-1 ${this.state.currentPage==='attractions'?'App-navlink-selected':''}`}
                        onClick={() => this.changePage('attractions')}
                      >
                        <span className="navbar-item">
                          <FontAwesomeIcon
                            icon={faSpaceShuttle}
                            className="mr-2"
                          />
                          Attractions
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/batiments"
                        className={`App-navlink mx-1 ${this.state.currentPage==='batiments'?'App-navlink-selected':''}`}
                        onClick={() => this.changePage('batiments')}
                      >
                        <span className="navbar-item">
                          <FontAwesomeIcon icon={faHotel} className="mr-2" />
                          Bâtiments
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/personnel"
                        className={`App-navlink mx-1 ${this.state.currentPage==='personnel'?'App-navlink-selected':''}`}
                        onClick={() => this.changePage('personnel')}
                      >
                        <span className="navbar-item">
                          <FontAwesomeIcon
                            icon={faUserFriends}
                            className="mr-2"
                          />
                          Personnel
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/maintenances"
                        className={`App-navlink mx-1 ${this.state.currentPage==='maintenances'?'App-navlink-selected':''}`}
                        onClick={() => this.changePage('maintenances')}
                      >
                        <span className="navbar-item">
                          <FontAwesomeIcon icon={faWrench} className="mr-2" />
                          Maintenances
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/stats"
                        className={`App-navlink mx-1 ${this.state.currentPage==='stats'?'App-navlink-selected':''}`}
                        onClick={() => this.changePage('stats')}
                      >
                        <span className="navbar-item">
                          <FontAwesomeIcon
                            icon={faChartLine}
                            className="mr-2"
                          />
                          Stats
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm="10">
                  <Route
                    exact
                    path="/attractions"
                    component={() => <AttractionComponent />}
                  />
                  <Route
                    path="/batiments"
                    component={() => <BatimentComponent />}
                  />
                  <Route
                    path="/personnel"
                    component={() => <PersonnelComponent />}
                  />
                  <Route
                    path="/maintenances"
                    component={() => <MaintenanceComponent />}
                  />
                  <Route path="/stats" component={() => <StatComponent />} />
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
