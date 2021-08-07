import React, { Component } from "react";
import logo from "../images/cpu1.svg";
import "../styles/NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false,
    };
  }

  openDropDownNav = () => {
    this.setState({ responsive: !this.state.responsive });
  };

  render() {
    return (
      <>
        <div className={`NavBar-container `}>
          <div className="NavBar-logo">
            {/* <img src={require('../cpu.svg').default} alt='mySvgLogo' /> */}
            <img
              className="NavBar-svg"
              style={{ width: "100px", height: "100px" }}
              src={logo}
              alt="myimage"
            />
          </div>

          <div
            className={`${
              this.state.responsive ? "NavBar-links responsive" : "NavBar-links"
            }`}
          >
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className="NavBar-toggle-button">
            <a href="#button" onClick={this.openDropDownNav}>
              <i
                className={`fas ${
                  this.state.responsive ? " fa-times" : " fa-chevron-left"
                } `}
              ></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;

// this is the attribution to the site from where i took my logo, which is flaticon.

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
