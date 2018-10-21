import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
import Attraction from "../classes/Attraction";
import Batiment from "../classes/Batiment";
import Maintenance from "../classes/Maintenance";
import Employe from "../classes/Employe";
import Stat from "../classes/Stat";
//import "../resources/style/ArrayAddModal.css";

class ArrayAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validCreateItemModal: false,
      itemCreatedValues: {}
    };
    this.renderModalbody = this.renderModalBody.bind(this);
    this.createItem = this.createItem.bind(this);
    this.validCreateItem = this.validCreateItem.bind(this);
    this.toggleValidCreateItemModal = this.toggleValidCreateItemModal.bind(
      this
    );
  }

  toggleValidCreateItemModal() {
    this.setState(prevState => ({
      validCreateItemModal: !prevState.validCreateItemModal
    }));
  }
  createItem(event, values) {
    this.setState({
      itemCreatedValues: values
    });
    this.toggleValidCreateItemModal();
  }
  validCreateItem() {
    this.props.addObject(this.state.itemCreatedValues);
    this.toggleValidCreateItemModal();
    this.props.toggleModal();
  }

  renderModalBody() {
    let tmp_body = [];
    // Pour chaque attribut de l'objet à ajouter
    for (const attribute in this.props.object.getAttributes()) {
      // On configure le type d'input au préalable
      if (attribute !== "id") {
        let input_type;
        if (
          attribute === "date_installation" ||
          attribute === "date" ||
          attribute === "last_date" ||
          attribute === "next_date"
        ) {
          input_type = "date";
        } else if (
          attribute === "price" ||
          attribute === "salary" ||
          attribute === "age"
        ) {
          input_type = "number";
        } else {
          input_type = "text";
        }
        // On push dans le tableau d'inputs qui sera rendered
        tmp_body.push(
          <Row key={`modaladd${this.props.object.getId()}${attribute}`}>
            <Col>
              <AvGroup>
                <Label for={`${attribute}`}>
                  {`${
                    typeof this.props.labels[attribute] !== "undefined" &&
                    this.props.labels[attribute] !== null
                      ? this.props.labels[attribute]
                      : attribute
                  }`}{" "}
                  <span className="red"> *</span>
                </Label>
                <AvInput
                  type={`${input_type}`}
                  name={`${attribute}`}
                  id={`${attribute}`}
                  placeholder={`${
                    typeof this.props.labels[attribute] !== "undefined" &&
                    this.props.labels[attribute] !== null
                      ? this.props.labels[attribute]
                      : attribute
                  }`}
                  required
                />
                <AvFeedback>champ invalide !</AvFeedback>
              </AvGroup>
            </Col>
          </Row>
        );
      }
    }
    return (
      <AvForm onValidSubmit={this.createItem}>
        {tmp_body}
        <Row>
          <Col>
            <span className="red">* champ obligatoire</span>
          </Col>
        </Row>
        <Row className="justify-content-end" noGutters>
          <Col sm="auto">
            <Button color="secondary" onClick={this.props.toggleModal}>
              Annuler
            </Button>{" "}
          </Col>
          <Col sm="auto" className="ml-1">
            <FormGroup>
              <Button color="primary">Ajouter</Button>
            </FormGroup>
          </Col>
        </Row>
      </AvForm>
    );
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.openModal} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.props.toggleModal}>
            {this.props.modalTitle}
          </ModalHeader>
          <ModalBody>
            <Container>{this.renderModalBody()}</Container>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.validCreateItemModal}
          toggle={this.toggleValidCreateItemModal}
        >
          <ModalBody>
            <Container>
              <Row>
                <Col>Etes-vous sûr ?</Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleValidCreateItemModal}>
              Annuler
            </Button>{" "}
            <Button color="primary" onClick={this.validCreateItem}>
              Confirmer
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ArrayAddModal;
