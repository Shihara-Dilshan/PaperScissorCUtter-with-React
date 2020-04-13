import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Counter extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line
      var instances = M.Sidenav.init(elems);
    });

    return (
      <React.Fragment>
        <audio id="winSound">
          <source src="assets/sounds/cash.mp3" type="audio/mpeg"></source>
        </audio>
        <audio id="lostSound">
          <source src="assets/sounds/aww.mp3" type="audio/mpeg"></source>
        </audio>
        <audio id="tiedSound">
          <source src="assets/sounds/swish.m4a" type="audio/mpeg"></source>
        </audio>
        <nav className="black">
          <div className="nav-wrapper left-align">
            <a href="#!" className="brand-logo">
              React Games
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#!" className="restart">
                  Restart
                </a>
              </li>
              <li>
                <a href="#!" className="help">
                  Help
                </a>
              </li>
              <li>
                <a href="#!" className="agame">
                  About Game
                </a>
              </li>
              <li>
                <a href="#!" className="adeveloper">
                  About Developer
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#!" className="left-align restart sidenav-close">
              Restart
            </a>
          </li>
          <li>
            <a href="#!" className="left-align help sidenav-close">
              Help
            </a>
          </li>
          <li>
            <a href="#!" className="left-align agame sidenav-close">
              About Game
            </a>
          </li>
          <li>
            <a href="#!" className="left-align adeveloper sidenav-close">
              About Developer
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
