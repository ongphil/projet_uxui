import React, { Component } from "react";
import { Button } from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
//import "../resources/style/DataArrayRow.css";

class DataArrayRow extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow() {
    let tmp_row_data = [];
    for (const attribute in this.props.object) {
      if (attribute !== "id") {
        if (
          attribute === "date" ||
          attribute === "date_installation" ||
          attribute === "last_date" ||
          attribute === "next_date"
        ) {
          tmp_row_data.push(
            <td
              key={`${this.props.object.id}${attribute}`}
              className="text-center"
            >{`${
              typeof this.props.object[attribute] != "undefined" &&
              this.props.object[attribute] != null
                ? moment(new Date(this.props.object[attribute]))
                    .locale("fr", localization)
                    .format("LL")
                : attribute
            }`}</td>
          );
        } else {
          tmp_row_data.push(
            <td
              key={`${this.props.object.id}${attribute}`}
              className="text-center"
            >{`${
              typeof this.props.object[attribute] != "undefined" &&
              this.props.object[attribute] != null
                ? this.props.object[attribute]
                : attribute
            }`}</td>
          );
        }
      }
    }
    tmp_row_data.push(
      <td key={`${this.props.object.id}buttons`} className="text-center">
        <Button
          color="primary"
          className="mr-3"
          size="sm"
          onClick={() => this.props.callEditModal(this.props.index)}
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Modifier
        </Button>
        <Button
          color="danger"
          size="sm"
          onClick={() => this.props.deleteItem(this.props.index)}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
          Supprimer
        </Button>
      </td>
    );
    return tmp_row_data;
  }

  render() {
    return <tr>{this.renderRow()}</tr>;
  }
}

export default DataArrayRow;
