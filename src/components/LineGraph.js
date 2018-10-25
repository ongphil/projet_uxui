import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Row, Col, Card, CardBody } from "reactstrap";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: {
        labels: this.props.datalabels.length > 0 ? this.props.datalabels : [],
        datasets: [
          {
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.borderColor,
            data: this.props.datasets.length > 0 ? this.props.datasets : []
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          labels: {
            fontColor: "rgb(255, 99, 132)"
          }
        }
      }
    };
  }

  render() {
    let graph = [];
    if (this.props.datalabels.length > 0) {
      graph.push(
        <Line
          key={this.props.title}
          data={this.state.lineData}
          options={this.state.options}
          height="60vh"
        />
      );
    } else {
      graph.push(
        <div key={this.props.title}> Aucune donnée à afficher ! </div>
      );
    }
    return (
      <div>
        <Card className="cardStyle">
          <CardBody>
            <div>
              <Row className="mb-4">
                <Col>
                  <span className="h6 statTitle">{this.props.title}</span>
                </Col>
              </Row>
              <Row>
                <Col>{graph}</Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LineGraph;
