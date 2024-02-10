/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Leftside.css"; 

const Leftside = (props) => {
  return (
    <div className="container">
      <div className="art-card">
        <div className="user-info">
          <div className="card-background" />
          <a href="#">
            <div className="photo" />
            <div className="link">Welcome, there!</div>
          </a>
          <a href="#">
            <div className="add-photo-text">Add a photo</div>
          </a>
        </div>
        <div className="widget">
          <a href="#">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </div>
        <a href="#" className="item">
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </a>
      </div>

      <div className="community-card">
        <a href="#">
          <span>Groups</span>
        </a>
        <a href="#">
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a href="#">
          <span>Follow Hashtags</span>
        </a>
        <a href="#">
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
};

export default Leftside;