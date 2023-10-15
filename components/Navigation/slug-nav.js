import Link from "next/link";
import BackButton from "../Button/BackButton";
import React, {Component} from 'react';
import { useState } from "react";

class SlugNav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header>
        <nav className="grid-container items-center">
          <div className="col-span-1 col-start-1 back-button-container">
            <BackButton href="/" />
          </div>


          <div className="col-end-9 flex text-cta-wrapper">
            <p className="mr-3">Next</p>
            <div className="text-cta">
              <div
                className="w-[1em] h-[1em] rounded-full"
                style={{ backgroundColor: "tomato" }}
              ></div>
              <button onClick={ () => {this.props.onClick(); this.handleClick();}}>
                Project Information
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default SlugNav;
