import React, { Component } from "react";
import { Button, Tooltip } from "reactstrap";
import moment from "moment";
import localization from "moment/locale/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
//import "../resources/style/DataArrayRow.css";

class DataArrayRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpenEdit: false,
      tooltipOpenDelete: false
    };
    this.renderRow = this.renderRow.bind(this);
    this.toggleEditTooltip = this.toggleEditTooltip.bind(this);
    this.toggleDeleteTooltip = this.toggleDeleteTooltip.bind(this);
  }

  toggleEditTooltip() {
    this.setState(prevState => ({
      tooltipOpenEdit: !prevState.tooltipOpenEdit
    }));
  }
  toggleDeleteTooltip() {
    this.setState(prevState => ({
      tooltipOpenDelete: !prevState.tooltipOpenDelete
    }));
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
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpenEdit}
          target={`buttonEdit${this.props.index}`}
          toggle={this.toggleEditTooltip}
        >
          Editer
        </Tooltip>
        <Button
          id={`buttonEdit${this.props.index}`}
          color="primary"
          size="sm"
          className="mr-2"
          onClick={() => this.props.callEditModal(this.props.index)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpenDelete}
          target={`buttonDelete${this.props.index}`}
          toggle={this.toggleDeleteTooltip}
        >
          Supprimer
        </Tooltip>
        <Button
          id={`buttonDelete${this.props.index}`}
          color="danger"
          size="sm"
          onClick={() => this.props.deleteItem(this.props.index)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
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
