import React, { Component } from "react";

class Game extends Component {
  state = {};

  render() {
    return (
      <div className="choices">
        <hr></hr>
        <div className="choice" id="r">
          <img src="assets/images/rock.png" alt=""></img>
        </div>
        <div className=" choice" id="p">
          <img src="assets/images/paper.png" alt=""></img>
        </div>
        <div className="choice" id="s">
          <img src="assets/images/scissor.png" alt=""></img>
        </div>
        <hr></hr>

        <p id="action-message">Rock || Scissor || Cutter</p>
      </div>
    );
  }
}

export default Game;
