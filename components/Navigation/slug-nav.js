import Link from "next/link";
import BackButton from "../Button/BackButton";
import React, { Component } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

class SlugNav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <AnimatePresence>
        <header>
          <motion.nav
            initial={{  y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid-container items-center"
          >
            <div className="col-span-2 col-start-1 back-button-container">
              <BackButton href="/" />
            </div>

            <div className="col-end-9 flex text-cta-wrapper">
              <p className="mr-3">Read</p>
              <div className="text-cta">
                <div
                  className="w-[1em] h-[1em] rounded-full"
                  style={{ backgroundColor: "tomato" }}
                ></div>
                <button
                  onClick={() => {
                    this.props.onClick();
                    this.handleClick();
                  }}
                >
                  Project Information
                </button>
              </div>
            </div>
          </motion.nav>
        </header>
      </AnimatePresence>
    );
  }
}
export default SlugNav;

// export const MyComponent = ({ isVisible }) => (
//   <AnimatePresence>
//     {isVisible && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       />
//     )}
//   </AnimatePresence>
// )