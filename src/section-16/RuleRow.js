import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, doScore, name, description } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        className={`RuleRow ${
          disabled ? "RuleRow-disabled" : "RuleRow-active"
        }`}
        onClick={!disabled ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    );
  }
}

export default RuleRow;
