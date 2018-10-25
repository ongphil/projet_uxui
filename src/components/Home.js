import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import SingleStatCard from "./SingleStatCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      nb_visitors:
        localStorage.getItem("nb_visitors") !== null
          ? parseInt(localStorage.getItem("nb_visitors"), 10)
          : 0,
      receipts:
        localStorage.getItem("receipts") !== null
          ? parseInt(localStorage.getItem("receipts"), 10)
          : 0
    };

    this.getRandomInt = this.getRandomInt.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);

    this.nb_visitorsID = setInterval(() => {
      if (this.state.nb_visitors >= 10000) {
        clearInterval(this.nb_visitorsID);
      }
      this.setState(
        prevState => ({
          nb_visitors: prevState.nb_visitors + this.getRandomInt(5, 10)
        }),
        () => localStorage.setItem("nb_visitors", this.state.nb_visitors)
      );
    }, 4000);

    this.receiptsID = setInterval(() => {
      if (this.state.receipts >= 1000000) {
        clearInterval(this.receiptsID);
      }
      this.setState(
        prevState => ({
          receipts: prevState.receipts + this.getRandomInt(200, 500)
        }),
        () => localStorage.setItem("receipts", this.state.receipts)
      );
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.nb_visitorsID);
    clearInterval(this.receiptsID);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  render() {
    return (
      <div className="App">
        <Container className="pt-4">
          <Row className="justify-content-center">
            <Col sm="11">
              <Row>
                <Col>
                  <Card className="cardStyle">
                    <CardHeader className="bg-maincolor">
                      <Container>
                        <Row className="my-3 justify-content-center align-items-center">
                          <Col sm="auto">
                            <span className="h1 statTitle color-white cursor-default">
                              {moment(this.state.date)
                                .locale("fr", localization)
                                .format("Do MMMM YYYY")}
                            </span>
                          </Col>
                        </Row>
                        <Row className="mb-4 justify-content-center cursor-default">
                          <Col sm="auto">
                            <span className="h5 statTitle color-white">
                              {this.state.date.toLocaleTimeString()}
                            </span>
                          </Col>
                        </Row>
                      </Container>
                    </CardHeader>
                    <CardBody>
                      <Row className="mt-5 mb-4">
                        <Col>
                          <SingleStatCard
                            value={this.state.nb_visitors}
                            title="Nombre de visiteurs"
                          />
                        </Col>
                        <Col>
                          <SingleStatCard
                            value={`${this.state.receipts} €`}
                            title="Recettes"
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
