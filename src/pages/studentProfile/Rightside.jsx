/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'public/assets/css/studentProfile/Rightside.css' 

const Rightside = (props) => {
  return (
    <div className="container">
      <div className="follow-card">
        <div className="title">
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </div>

        <ul className="feed-list">
          <li>
            <a>
              <div className="avatar"></div>
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <div className="avatar"></div>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </ul>

        <a className="recommendation">
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </a>
      </div>
      <div className="banner-card">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rightside;
