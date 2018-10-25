import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import LineGraph from "./LineGraph";

class Stats extends Component {
  constructor(props) {
    super(props);

    localStorage.removeItem("allStats");

    const initialStats = [
      {
        day: new Date("10/25/2018"),
        nb_visitors: 22153,
        receipts: 1032045
      },
      {
        day: new Date("10/26/2018"),
        nb_visitors: 18224,
        receipts: 735400
      },
      {
        day: new Date("10/27/2018"),
        nb_visitors: 20123,
        receipts: 924145
      },
      {
        day: new Date("10/28/2018"),
        nb_visitors: 43123,
        receipts: 2653989
      },
      {
        day: new Date("10/29/2018"),
        nb_visitors: 48923,
        receipts: 2898456
      },
      {
        day: new Date("10/30/2018"),
        nb_visitors: 17234,
        receipts: 489345
      }
    ];

    this.state = {
      allStats:
        localStorage.getItem("allStats") !== null &&
        typeof localStorage.getItem("allStats") !== "undefined"
          ? JSON.parse(localStorage.getItem("allStats"))
          : initialStats,
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
