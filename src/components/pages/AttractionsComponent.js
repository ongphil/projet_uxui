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
import Attraction from "../../classes/Attraction";
import "../../resources/style/AttractionsComponent.css";

class AttractionComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentPage !== "attractions") {
      this.props.changePage("attractions");
    }
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
                    <Col sm="auto">Attractions</Col>
                    <Col sm="auto">
                      <Button color="info">Ajouter une attraction</Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Table hover responsive>
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Date</th>
                          <th>Prix</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Hyperspace Mountain</td>
                          <td>15/10/2018</td>
                          <td>25€</td>
                          <td>fzeezg</td>
                        </tr>
                        <tr>
                          <td>Rock'n'Roller Coaster</td>
                          <td>15/10/2018</td>
                          <td>20€</td>
                          <td>fzeezg</td>
                        </tr>
                        <tr>
                          <td>La tour de la terreur</td>
                          <td>15/10/2018</td>
                          <td>19€</td>
                          <td>fzeezg</td>
                        </tr>
                      </tbody>
                    </Table>
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

export default AttractionComponent;
