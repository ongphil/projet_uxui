import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DataArrayRow from "./DataArrayRow";
import ArrayAddModal from "./ArrayAddModal";
import ArrayEditModal from "./ArrayEditModal";
import "../resources/style/DataArray.css";
const uuidv4 = require("uuid/v4");

class DataArray extends Component {
  constructor(props) {
    super(props);

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
      openAddModal: false,
      openEditModal: false,
      validDeleteItemModal: false,
      editItem: {},
      editItemIndex: 0,
      deleteItemIndex: 0
    };
    this.renderHeadlings = this.renderHeadlings.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.instanceAppropriatedClass = this.instanceAppropriatedClass.bind(this);
    this.addObject = this.addObject.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.editObject = this.editObject.bind(this);
    this.callEditModal = this.callEditModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleValidDeleteItemModal = this.toggleValidDeleteItemModal.bind(
      this
    );
    this.validDeleteItem = this.validDeleteItem.bind(this);

    this.labels = {
      name: "Nom",
      date_installation: `Date d'installation`,
      price: "Prix de l'entrée (€)",
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

  toggleEditModal() {
    this.setState(prevState => ({
      openEditModal: !prevState.openEditModal
    }));
  }

  instanceAppropriatedClass() {
    let new_obj;
    switch (this.props.currentPage) {
      case "Attractions":
        new_obj = {
          name: "",
          date_installation: new Date(),
          price: 0
        };
        break;
      case "Bâtiments":
        new_obj = {
          name: "",
          date_installation: new Date()
        };
        break;
      case "Maintenances":
        new_obj = {
          last_date: new Date(),
          next_date: new Date(),
          attraction: this.state.allAttractions,
          technicien: this.state.allPersonnel
        };
        break;
      case "Personnel":
        new_obj = {
          last_name: "",
          first_name: "",
          age: 0,
          job: "",
          salary: 0
        };
        break;
      case "Stats":
        new_obj = {
          date: new Date(),
          nb_visitors: 0,
          receipts: 0
        };
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
        let new_attraction = {
          id: uuidv4(),
          name: object.name,
          date_installation: object.date_installation,
          price: object.price
        };
        tmp_array.push(new_attraction);
        this.setState(
          {
            allAttractions: tmp_array
          },
          () =>
            localStorage.setItem("allAttractions", JSON.stringify(tmp_array))
        );
        break;
      case "Bâtiments":
        tmp_array = [...this.state.allBatiments];
        let new_batiment = {
          id: uuidv4(),
          name: object.name,
          date_installation: object.date_installation
        };
        tmp_array.push(new_batiment);
        this.setState(
          {
            allBatiments: tmp_array
          },
          () => localStorage.setItem("allBatiments", JSON.stringify(tmp_array))
        );
        break;
      case "Personnel":
        tmp_array = [...this.state.allPersonnel];
        let new_employe = {
          id: uuidv4(),
          last_name: object.last_name,
          first_name: object.first_name,
          age: object.age,
          job: object.job,
          salary: object.salary
        };
        tmp_array.push(new_employe);
        this.setState(
          {
            allPersonnel: tmp_array
          },
          () => localStorage.setItem("allPersonnel", JSON.stringify(tmp_array))
        );
        break;
      case "Maintenances":
        tmp_array = [...this.state.allMaintenances];
        let new_maintenance = {
          id: uuidv4(),
          last_date: object.last_date,
          next_date: object.next_date,
          attraction: object.attraction,
          technicien: object.technicien
        };
        tmp_array.push(new_maintenance);
        this.setState(
          {
            allMaintenances: tmp_array
          },
          () =>
            localStorage.setItem("allMaintenances", JSON.stringify(tmp_array))
        );
        break;
      default:
        break;
    }
  }

  callEditModal(index) {
    switch (this.props.currentPage) {
      case "Attractions":
        this.setState(
          {
            editItem: this.state.allAttractions[index],
            editItemIndex: index
          },
          () => this.toggleEditModal()
        );
        break;
      case "Bâtiments":
        this.setState(
          {
            editItem: this.state.allBatiments[index],
            editItemIndex: index
          },
          () => this.toggleEditModal()
        );
        break;
      case "Maintenances":
        this.setState(
          {
            editItem: this.state.allMaintenances[index],
            editItemIndex: index
          },
          () => this.toggleEditModal()
        );
        break;
      case "Personnel":
        this.setState(
          {
            editItem: this.state.allPersonnel[index],
            editItemIndex: index
          },
          () => this.toggleEditModal()
        );
        break;
      default:
        break;
    }
  }

  editObject(object, index) {
    let tmp_array;
    switch (this.props.currentPage) {
      case "Attractions":
        tmp_array = [...this.state.allAttractions];

        tmp_array[index] = Object.assign(
          {},
          this.state.allAttractions[index],
          object
        );
        this.setState(
          {
            allAttractions: tmp_array
          },
          () =>
            localStorage.setItem("allAttractions", JSON.stringify(tmp_array))
        );
        break;
      case "Bâtiments":
        tmp_array = [...this.state.allBatiments];

        tmp_array[index] = Object.assign(
          {},
          this.state.allBatiments[index],
          object
        );
        this.setState(
          {
            allBatiments: tmp_array
          },
          () => localStorage.setItem("allBatiments", JSON.stringify(tmp_array))
        );
        break;
      case "Personnel":
        tmp_array = [...this.state.allPersonnel];

        tmp_array[index] = Object.assign(
          {},
          this.state.allPersonnel[index],
          object
        );
        this.setState(
          {
            allPersonnel: tmp_array
          },
          () => localStorage.setItem("allPersonnel", JSON.stringify(tmp_array))
        );
        break;
      case "Maintenances":
        tmp_array = [...this.state.allMaintenances];

        tmp_array[index] = Object.assign(
          {},
          this.state.allMaintenances[index],
          object
        );
        this.setState(
          {
            allMaintenances: tmp_array
          },
          () =>
            localStorage.setItem("allMaintenances", JSON.stringify(tmp_array))
        );
        break;
      default:
        break;
    }
  }

  deleteItem(index) {
    this.setState({
      deleteItemIndex: index
    });
    this.toggleValidDeleteItemModal();
  }
  toggleValidDeleteItemModal() {
    this.setState(prevState => ({
      validDeleteItemModal: !prevState.validDeleteItemModal
    }));
  }

  validDeleteItem() {
    let tmp_array;
    switch (this.props.currentPage) {
      case "Attractions":
        tmp_array = [...this.state.allAttractions];
        tmp_array.splice(this.state.deleteItemIndex, 1);

        this.setState(
          {
            allAttractions: tmp_array
          },
          () =>
            localStorage.setItem("allAttractions", JSON.stringify(tmp_array))
        );
        break;
      case "Bâtiments":
        tmp_array = [...this.state.allBatiments];
        tmp_array.splice(this.state.deleteItemIndex, 1);

        this.setState(
          {
            allBatiments: tmp_array
          },
          () => localStorage.setItem("allBatiments", JSON.stringify(tmp_array))
        );
        break;
      case "Maintenances":
        tmp_array = [...this.state.allMaintenances];
        tmp_array.splice(this.state.deleteItemIndex, 1);

        this.setState(
          {
            allMaintenances: tmp_array
          },
          () =>
            localStorage.setItem("allMaintenances", JSON.stringify(tmp_array))
        );
        break;
      case "Personnel":
        tmp_array = [...this.state.allPersonnel];
        tmp_array.splice(this.state.deleteItemIndex, 1);

        this.setState(
          {
            allPersonnel: tmp_array
          },
          () => localStorage.setItem("allPersonnel", JSON.stringify(tmp_array))
        );
        break;
      default:
        break;
    }
    this.toggleValidDeleteItemModal();
  }

  renderHeadlings() {
    const tmp_headlings_array = this.props.headlings.map(headling => {
      return <th key={`${headling}${this.props.currentPage}`}>{headling}</th>;
    });
    let tmp_head = [];
    tmp_head.push(
      <thead key={`head${this.props.currentPage}`} className="text-center">
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
          dataArray = this.state.allAttractions.map((attraction, index) => {
            return (
              <DataArrayRow
                key={`${attraction.id}`}
                object={attraction}
                index={index}
                callEditModal={this.callEditModal}
                callDeleteModal={this.callDeleteModal}
                deleteItem={this.deleteItem}
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
          dataArray = this.state.allBatiments.map((batiment, index) => {
            return (
              <DataArrayRow
                key={`${batiment.id}`}
                object={batiment}
                index={index}
                callEditModal={this.callEditModal}
                callDeleteModal={this.callDeleteModal}
                deleteItem={this.deleteItem}
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
          dataArray = this.state.allMaintenances.map((maintenance, index) => {
            return (
              <DataArrayRow
                key={`${maintenance.id}`}
                object={maintenance}
                index={index}
                callEditModal={this.callEditModal}
                callDeleteModal={this.callDeleteModal}
                deleteItem={this.deleteItem}
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
          dataArray = this.state.allPersonnel.map((employe, index) => {
            return (
              <DataArrayRow
                key={`${employe.id}`}
                object={employe}
                index={index}
                callEditModal={this.callEditModal}
                callDeleteModal={this.callDeleteModal}
                deleteItem={this.deleteItem}
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
          <Row className="justify-content-center">
            <Col>
              <Card>
                <CardHeader className="card-header">
                  <Row className="justify-content-between my-2">
                    <Col sm="auto">{this.props.currentPage}</Col>
                    <Col sm="auto">
                      <Button
                        color="success"
                        onClick={() => this.toggleAddModal()}
                        disabled={
                          this.props.currentPage === "Maintenances" &&
                          (this.state.allAttractions.length <= 0 ||
                            this.state.allPersonnel.length <= 0)
                            ? true
                            : false
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Ajouter un nouvel élément
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row className="justify-content-end mb-3">
                    <Col sm="3">
                      <InputGroup size="sm">
                        <Input placeholder="Rechercher ..." />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Table striped responsive="true">
                        {this.renderHeadlings()}
                        {this.renderRows()}
                      </Table>
                      {this.props.currentPage === "Maintenances" &&
                      (this.state.allAttractions.length <= 0 ||
                        this.state.allPersonnel.length <= 0) ? (
                        ""
                      ) : (
                        <div>
                          <ArrayAddModal
                            openModal={this.state.openAddModal}
                            toggleModal={this.toggleAddModal}
                            modalTitle={"Ajouter"}
                            labels={this.labels}
                            object={this.instanceAppropriatedClass()}
                            addObject={this.addObject}
                          />
                          <ArrayEditModal
                            openModal={this.state.openEditModal}
                            toggleModal={this.toggleEditModal}
                            modalTitle={"Éditer un élément"}
                            labels={this.labels}
                            index={this.state.editItemIndex}
                            object={this.state.editItem}
                            editObject={this.editObject}
                            allAttractions={this.state.allAttractions}
                            allPersonnel={this.state.allPersonnel}
                          />

                          <Modal
                            isOpen={this.state.validDeleteItemModal}
                            toggle={this.toggleValidDeleteItemModal}
                          >
                            <ModalBody>
                              <Container>
                                <Row>
                                  <Col>Etes-vous sûr ?</Col>
                                </Row>
                              </Container>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="secondary"
                                onClick={this.toggleValidDeleteItemModal}
                              >
                                Annuler
                              </Button>{" "}
                              <Button
                                color="primary"
                                onClick={this.validDeleteItem}
                              >
                                Confirmer
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                      )}
                    </Col>
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
