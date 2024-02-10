/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";

import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <div className="home-container">
      <section className="home-section">
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </section>
      <div className="home-layout">
        <Leftside />
        <Main />
        <Rightside />
      </div>
    </div>
  );
};

export default Home;
