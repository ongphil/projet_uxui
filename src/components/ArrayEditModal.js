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
  AvField,
  AvFeedback
} from "availity-reactstrap-validation";
//import "../resources/style/ArrayAddModal.css";

class ArrayEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validEditItemModal: false,
      itemEditedValues: {}
    };
    this.renderModalbody = this.renderModalBody.bind(this);
    this.editItem = this.editItem.bind(this);
    this.validEditItem = this.validEditItem.bind(this);
    this.toggleValidEditItemModal = this.toggleValidEditItemModal.bind(this);
  }

  toggleValidEditItemModal() {
    this.setState(prevState => ({
      validEditItemModal: !prevState.validEditItemModal
    }));
  }
  editItem(event, values) {
    this.setState({
      itemEditedValues: values
    });
    this.toggleValidEditItemModal();
  }
  validEditItem() {
    this.props.editObject(this.state.itemEditedValues, this.props.index);
    this.toggleValidEditItemModal();
    this.props.toggleModal();
  }

  renderModalBody() {
    let tmp_body = [];
    // Pour chaque attribut de l'objet à ajouter
    for (const attribute in this.props.object) {
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
        } else if (attribute === "attraction" || attribute === "technicien") {
          input_type = "select";
        } else {
          input_type = "text";
        }
        // On push dans le tableau d'inputs qui sera rendered
        if (attribute === "attraction") {
          let tmp_select = [];
          for (const attraction in this.props.allAttractions) {
            tmp_select.push(
              <option
                key={`selectedititem${
                  this.props.allAttractions[attraction].id
                }`}
              >
                {this.props.allAttractions[attraction].name}
              </option>
            );
          }
          tmp_body.push(
            <Row key={`modaledit${attribute}`}>
              <Col>
                <AvField
                  type={`${input_type}`}
                  name={`${attribute}`}
                  id={`${attribute}`}
                  label={`${
                    typeof this.props.labels[attribute] !== "undefined" &&
                    this.props.labels[attribute] !== null
                      ? this.props.labels[attribute]
                      : attribute
                  }`}
                  value={this.props.object.attraction}
                >
                  {tmp_select}
                </AvField>
              </Col>
            </Row>
          );
        } else if (attribute === "technicien") {
          let tmp_select = [];
          for (const employe in this.props.allPersonnel) {
            tmp_select.push(
              <option
                key={`selectedititem${this.props.allPersonnel[employe].id}`}
              >
                {this.props.allPersonnel[employe].last_name}
              </option>
            );
          }
          tmp_body.push(
            <Row key={`modaledit${attribute}`}>
              <Col>
                <AvField
                  type={`${input_type}`}
                  name={`${attribute}`}
                  id={`${attribute}`}
                  label={`${
                    typeof this.props.labels[attribute] !== "undefined" &&
                    this.props.labels[attribute] !== null
                      ? this.props.labels[attribute]
                      : attribute
                  }`}
                  value={this.props.object.technicien}
                >
                  {tmp_select}
                </AvField>
              </Col>
            </Row>
          );
        } else {
          tmp_body.push(
            <Row key={`modaledit${attribute}`}>
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
                    value={this.props.object[attribute]}
                    required
                  />
                  <AvFeedback>champ invalide !</AvFeedback>
                </AvGroup>
              </Col>
            </Row>
          );
        }
      }
    }
    return (
      <AvForm onValidSubmit={this.editItem}>
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
              <Button color="primary">Éditer</Button>
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
          isOpen={this.state.validEditItemModal}
          toggle={this.toggleValidEditItemModal}
        >
          <ModalBody>
            <Container>
              <Row>
                <Col>Voulez-vous vraiment éditer cet élément ?</Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleValidEditItemModal}>
              Annuler
            </Button>{" "}
            <Button color="primary" onClick={this.validEditItem}>
              Confirmer
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ArrayEditModal;
