import React, { Component } from "react";

class Game extends Component {
  state = {};

  render() {
    return (
      <div className="choices">
        <div className="choice" id="r">
          <img src="assets/images/rock.png" alt=""></img>
        </div>
        <div className=" choice" id="p">
          <img src="assets/images/paper.png" alt=""></img>
        </div>
        <div className="choice" id="s">
          <img src="assets/images/scissor.png" alt=""></img>
        </div>

        <p id="action-message">Make your move</p>
      </div>
    );
  }
}

export default Game;
