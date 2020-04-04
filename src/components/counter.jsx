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
        <nav className="black">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              React App
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#!">Sass</a>
              </li>
              <li>
                <a href="#!">Components</a>
              </li>
              <li>
                <a href="#!">Javascript</a>
              </li>
              <li>
                <a href="#!">Mobile</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#!" className="left-align">
              Sass
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              Components
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              Javascript
            </a>
          </li>
          <li>
            <a href="#!" className="left-align">
              Mobile
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;
