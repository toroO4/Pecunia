/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "public/assets/css/studentProfile/Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="content">
        <span className="logo">
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </span>
        <div className="search">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="search-icon">
            <img src="/images/search-icon.svg" alt="" />
          </div>
        </div>
        <nav className="nav">
          <ul className="nav-list-wrap">
            <li className="nav-list active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </li>
            <li className="nav-list">
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </li>
            <li className="nav-list">
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </li>
            <li className="nav-list">
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </li>
            <li className="nav-list">
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </li>
            <li className="nav-list user">
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <div className="sign-out">
                <a>Sign Out</a>
              </div>
            </li>
            <li className="nav-list work">
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
