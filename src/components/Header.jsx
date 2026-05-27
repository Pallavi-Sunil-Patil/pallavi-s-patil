import React, { Component } from 'react'
import devIcon from "../assets/dev-logo.png";

export class Header extends Component {
  render() {
    return (
      <>
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg container">
            <a className="navbar-brand d-flex align-items-center" href="#"><img src={devIcon} className="me-2"/> Pallavi<span>Patil</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
