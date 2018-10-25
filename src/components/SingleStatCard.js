import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class SingleStatCard extends Component {
  numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  render() {
    return (
      <div className="App">
        <Card className="cardStyle">
          <CardBody>
            <Container>
              <Row className="mt-5 mb-3 justify-content-center">
                <Col sm="auto">
                  <span className="h1 color-main cursor-default">
                    {this.numberWithSpaces(this.props.value)}
                  </span>
                </Col>
              </Row>
              <Row className="mb-5 justify-content-center">
                <Col sm="auto">
                  <span className="h4 color-main cursor-default">
                    {this.props.title}
                  </span>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleStatCard;
