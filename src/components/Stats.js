import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import LineGraph from "./LineGraph";

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStats:
        localStorage.getItem("allStats") !== null &&
        typeof localStorage.getItem("allStats") !== "undefined"
          ? JSON.parse(localStorage.getItem("allStats"))
          : [],
      allDays: [],
      allVisitors: [],
      allReceipts: []
    };
    if (
      this.props.currentPage === "Stats" &&
      this.props.currentNavItemSelected !== "stats"
    ) {
      this.props.changePage("stats");
    }
    let tmp_days = [];
    let tmp_visitors = [];
    let tmp_receipts = [];

    for (const stat in this.state.allStats) {
      tmp_days.push(
        moment(new Date(this.state.allStats[stat].day))
          .locale("fr", localization)
          .format("L")
      );
      tmp_visitors.push(this.state.allStats[stat].nb_visitors);
      tmp_receipts.push(this.state.allStats[stat].receipts);
    }

    this.state = {
      allDays: tmp_days,
      allVisitors: tmp_visitors,
      allReceipts: tmp_receipts
    };
  }

  /*componentDidMount() {
    let tmp_array = [
      { day: new Date("10/02/2018"), nb_visitors: 400, receipts: 20000 },
      { day: new Date("11/02/2018"), nb_visitors: 245, receipts: 11420 },
      { day: new Date("12/02/2018"), nb_visitors: 453, receipts: 22543 },
      { day: new Date("11/02/2018"), nb_visitors: 376, receipts: 17234 }
    ];
    localStorage.setItem("allStats", JSON.stringify(tmp_array));
  }*/

  render() {
    return (
      <div className="App">
        <Container className="pt-4">
          <Row className="mb-4 justify-content-center">
            <Col sm="11">
              <LineGraph
                title="Nombres de visiteurs"
                datalabels={this.state.allDays}
                datasets={this.state.allVisitors}
                backgroundColor={"rgba(71,136,199,0.2)"}
                borderColor={"rgba(71,136,199)"}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="11">
              <LineGraph
                title="Recettes (€)"
                datalabels={this.state.allDays}
                datasets={this.state.allReceipts}
                backgroundColor={"rgba(199,48,52,0.2)"}
                borderColor={"rgba(199,48,52)"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Stats;
