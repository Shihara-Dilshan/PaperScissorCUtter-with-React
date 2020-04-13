import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Logic extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="score-board" id="head">
          <div className="badge" id="user-Label">
            user
          </div>
          <div className="badge" id="computer-Label">
            comp
          </div>
          <span className="user-score" id="user-score">
            0{" "}
          </span>
          <span>:</span>
          <span className="computer-score" id="computer-score">
            0
          </span>
        </div>
        <div className="result">
          <p>click on a following start the round </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Logic;
