import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import Attraction from "../classes/Attraction";
import Batiment from "../classes/Batiment";
import Maintenance from "../classes/Maintenance";
import Employe from "../classes/Employe";
import Stat from "../classes/Stat";
import DataArrayRow from "./DataArrayRow";
import ArrayAddModal from "./ArrayAddModal";
import "../resources/style/DataArray.css";

class DataArray extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.parse(localStorage.getItem("allAttractions")));
    this.state = {
      allAttractions:
        localStorage.getItem("allAttractions") !== null
          ? JSON.parse(localStorage.getItem("allAttractions"))
          : [],
      allBatiments:
        localStorage.getItem("allBatiments") !== null
          ? JSON.parse(localStorage.getItem("allBatiments"))
          : [],
      allMaintenances:
        localStorage.getItem("allMaintenances") !== null
          ? JSON.parse(localStorage.getItem("allMaintenances"))
          : [],
      allPersonnel:
        localStorage.getItem("allPersonnel") !== null
          ? JSON.parse(localStorage.getItem("allPersonnel"))
          : [],
      allStats:
        localStorage.getItem("allStats") !== null
          ? JSON.parse(localStorage.getItem("allStats"))
          : [],
      openAddModal: false
    };
    this.renderHeadlings = this.renderHeadlings.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.instanceAppropriatedClass = this.instanceAppropriatedClass.bind(this);
    this.addObject = this.addObject.bind(this);

    this.labels = {
      name: "Nom",
      date_installation: `Date d'installation`,
      price: "Prix (€)",
      last_name: "Nom",
      first_name: "Prénom",
      age: "Age",
      job: "Poste",
      salary: "Salaire",
      nb_visitors: "Nombre de visiteurs",
      receipts: "Recette",
      date: "Date",
      last_date: "Dernière maintenance",
      next_date: "Prochaine maintenance",
      attraction: "Attraction",
      technicien: "Technicien"
    };
  }

  componentDidMount() {
    if (
      this.props.currentPage === "Attractions" &&
      this.props.currentNavItemSelected !== "attractions"
    ) {
      this.props.changePage("attractions");
    }

    let attraction = new Attraction(
      "test",
      moment(new Date())
        .locale("fr", localization)
        .format("LL"),
      20
    );
    this.setState(prevState => ({
      allAttractions: [...prevState.allAttractions, attraction]
    }));
    if (
      this.props.currentPage === "Bâtiments" &&
      this.props.currentNavItemSelected !== "batiments"
    ) {
      this.props.changePage("batiments");
    }
    if (
      this.props.currentPage === "Personnel" &&
      this.props.currentNavItemSelected !== "personnel"
    ) {
      this.props.changePage("personnel");
    }
    if (
      this.props.currentPage === "Maintenances" &&
      this.props.currentNavItemSelected !== "maintenances"
    ) {
      this.props.changePage("maintenances");
    }
    if (
      this.props.currentPage === "Stats" &&
      this.props.currentNavItemSelected !== "stats"
    ) {
      this.props.changePage("stats");
    }
  }

  toggleAddModal() {
    this.setState(prevState => ({
      openAddModal: !prevState.openAddModal
    }));
  }

  instanceAppropriatedClass() {
    let new_obj;
    switch (this.props.currentPage) {
      case "Attractions":
        new_obj = new Attraction("", new Date(), 0);
        break;
      case "Bâtiments":
        new_obj = new Batiment("", new Date());
        break;
      case "Maintenances":
        new_obj = new Maintenance(
          new Date(),
          new Date(),
          new Attraction("", new Date(), 0),
          new Employe("", "", 0, "", 0)
        );
        break;
      case "Personnel":
        new_obj = new Employe("", "", 0, "", 0);
        break;
      case "Stats":
        new_obj = new Stat(new Date(), 0, 0);
        break;
      default:
        break;
    }
    return new_obj;
  }

  addObject(object) {
    let tmp_array;
    switch (this.props.currentPage) {
      case "Attractions":
        tmp_array = [...this.state.allAttractions];
        const new_attraction = new Attraction(
          object.name,
          object.date_installation,
          object.price
        );
        tmp_array.push(new_attraction);
        this.setState(
          {
            allAttractions: tmp_array
          },
          () =>
            localStorage.setItem("allAttractions", JSON.stringify(tmp_array))
        );
        console.log("saveugar");

        break;
      /*case "Bâtiments":
        tmp_array = [...this.state.allAttractions];
        const new_attraction = new Attraction(
          object.name,
          object.date_instalation,
          object.price
        );
        tmp_array.push(new_attraction);
        this.setState({
          allAttractions: tmp_array
        });
        break;
      case "Maintenances":
        tmp_array = [...this.state.allAttractions];
        const new_attraction = new Attraction(
          object.name,
          object.date_instalation,
          object.price
        );
        tmp_array.push(new_attraction);
        this.setState({
          allAttractions: tmp_array
        });
        break;
      case "Personnel":
        tmp_array = [...this.state.allAttractions];
        const new_attraction = new Attraction(
          object.name,
          object.date_instalation,
          object.price
        );
        tmp_array.push(new_attraction);
        this.setState({
          allAttractions: tmp_array
        });
        break;
      case "Stats":
        tmp_array = [...this.state.allAttractions];
        const new_attraction = new Attraction(
          object.name,
          object.date_instalation,
          object.price
        );
        tmp_array.push(new_attraction);
        this.setState({
          allAttractions: tmp_array
        });
        break;*/
      default:
        break;
    }
  }

  renderHeadlings() {
    const tmp_headlings_array = this.props.headlings.map(headling => {
      return <th key={`${headling}${this.props.currentPage}`}>{headling}</th>;
    });
    let tmp_head = [];
    tmp_head.push(
      <thead key={`head${this.props.currentPage}`}>
        <tr>{tmp_headlings_array}</tr>
      </thead>
    );
    return tmp_head;
  }

  renderRows() {
    let dataArray = [];
    switch (this.props.currentPage) {
      case "Attractions":
        if (
          this.state.allAttractions !== null &&
          typeof this.state.allAttractions !== "undefined"
        ) {
          dataArray = this.state.allAttractions.map(attraction => {
            return (
              <DataArrayRow
                key={`${attraction.getId()}`}
                object={attraction.getAttributes()}
              />
            );
          });
        }
        break;
      case "Bâtiments":
        if (
          this.state.allBatiments !== null &&
          typeof this.state.allBatiments !== "undefined"
        ) {
          dataArray = this.state.allBatiments.map(batiment => {
            return (
              <DataArrayRow
                key={`${batiment.getId()}`}
                object={batiment.getAttributes()}
              />
            );
          });
        }
        break;
      case "Maintenances":
        if (
          this.state.allMaintenances !== null &&
          typeof this.state.allMaintenances !== "undefined"
        ) {
          dataArray = this.state.allMaintenances.map(maintenance => {
            return (
              <DataArrayRow
                key={`${maintenance.getId()}`}
                object={maintenance.getAttributes()}
              />
            );
          });
        }
        break;
      case "Personnel":
        if (
          this.state.allPersonnel !== null &&
          typeof this.state.allPersonnel !== "undefined"
        ) {
          dataArray = this.state.allPersonnel.map(employe => {
            return (
              <DataArrayRow
                key={`${employe.getId()}`}
                object={employe.getAttributes()}
              />
            );
          });
        }
        break;
      case "Stats":
        dataArray = this.state.allStats;
        break;
      default:
        break;
    }
    let arrayBody = [];
    arrayBody.push(<tbody key="tbody">{dataArray}</tbody>);
    return arrayBody;
  }

  render() {
    return (
      <div className="App">
        <Container className="pt-4">
          <Row>
            <Col>
              <Card>
                <CardHeader className="card-header">
                  <Row className="justify-content-between my-2">
                    <Col sm="auto">{this.props.currentPage}</Col>
                    <Col sm="auto">
                      <Button
                        color="info"
                        onClick={() => this.toggleAddModal()}
                      >
                        Ajouter
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Table hover responsive>
                      {this.renderHeadlings()}
                      {this.renderRows()}
                    </Table>
                    <ArrayAddModal
                      openModal={this.state.openAddModal}
                      toggleModal={this.toggleAddModal}
                      modalTitle={"Ajouter"}
                      labels={this.labels}
                      object={this.instanceAppropriatedClass()}
                      addObject={this.addObject}
                    />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DataArray;
