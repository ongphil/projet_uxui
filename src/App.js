import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faWrench} from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import AttractionComponent from "./components/pages/AttractionComponent";
import BatimentComponent from "./components/pages/BatimentComponent";
import PersonnelComponent from "./components/pages/PersonnelComponent";
import MaintenanceComponent from "./components/pages/MaintenanceComponent";
import StatComponent from "./components/pages/StatComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
            <Container>
              <Navbar className="App-navbar" expand="md">
                <NavbarBrand className="App-navbarbrand" tag={Link} to="/">
                  <span className="navbar-item"><FontAwesomeIcon icon={faHome} className="mr-2"/>Park Manager</span>
                </NavbarBrand>
                <Nav className="ml-auto App-nav" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/attractions" className="App-navlink mx-1">
                      <span className="navbar-item"><FontAwesomeIcon icon={faSpaceShuttle} className="mr-2"/>Attractions</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/batiments" className="App-navlink mx-1">
                      <span className="navbar-item"><FontAwesomeIcon icon={faHotel} className="mr-2"/>Bâtiments</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/personnel" className="App-navlink mx-1">
                      <span className="navbar-item"><FontAwesomeIcon icon={faUserFriends} className="mr-2"/>Personnel</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/maintenances" className="App-navlink mx-1">
                      <span className="navbar-item"><FontAwesomeIcon icon={faWrench} className="mr-2"/>Maintenances</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/stats" className="App-navlink mx-1">
                      <span className="navbar-item"><FontAwesomeIcon icon={faChartLine} className="mr-2"/>Stats</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
              </Container>
            </header>
            <Container>
            <Route
              exact
              path="/attractions"
              component={() => <AttractionComponent />}
            />
            <Route path="/batiments" component={() => <BatimentComponent />} />
            <Route path="/personnel" component={() => <PersonnelComponent />} />
            <Route
              path="/maintenances"
              component={() => <MaintenanceComponent />}
            />
            <Route path="/stats" component={() => <StatComponent />} />
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
