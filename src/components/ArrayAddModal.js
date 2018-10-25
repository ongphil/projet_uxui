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
          for (const attraction in this.props.object[attribute]) {
            tmp_select.push(
              <option key={`${this.props.object[attribute][attraction].id}`}>
                {this.props.object[attribute][attraction].name}
              </option>
            );
          }
          tmp_body.push(
            <Row key={`modaladd${attribute}`}>
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
                  value={this.props.object.attraction[0].name}
                >
                  {tmp_select}
                </AvField>
              </Col>
            </Row>
          );
        } else if (attribute === "technicien") {
          let tmp_select = [];
          for (const employe in this.props.object[attribute]) {
            tmp_select.push(
              <option key={`${this.props.object[attribute][employe].id}`}>
                {this.props.object[attribute][employe].last_name}
              </option>
            );
          }
          tmp_body.push(
            <Row key={`modaladd${attribute}`}>
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
                  value={this.props.object.technicien[0].last_name}
                >
                  {tmp_select}
                </AvField>
              </Col>
            </Row>
          );
        } else {
          tmp_body.push(
            <Row key={`modaladd${attribute}`}>
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
                <Col>Voulez-vous vraiment ajouter cet élément ?</Col>
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
