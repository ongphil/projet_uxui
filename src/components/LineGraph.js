import React, { Component } from "react";
import { Line } from "react-chartjs";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: {
        labels: this.props.datalabels,
        datasets: [
          {
            fillColor: this.props.fillColor,
            strokeColor: this.props.strokeColor,
            data: this.props.datasets
          }
        ]
      },
      options: {
        responsive: true
      }
    };
  }

  render() {
    if (this.props.datalabels.length > 0) {
      return (
        <div>
          <Card>
            <CardHeader>{this.props.title}</CardHeader>
            <CardBody>
              <div>
                <Row>
                  <Col>
                    <Line
                      data={this.state.lineData}
                      options={this.state.options}
                    />
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }
  }
}

export default LineGraph;
