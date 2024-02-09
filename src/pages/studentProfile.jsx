/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const StudentProfile = () => {
  return (
    <div className="student-profile-app">
      <nav className="student-profile-nav">
        <div className="student-profile-wrapper">
          <div className="student-profile-left">
            <div className="student-profile-logo">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="student-profile-input-container">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search for job, Skills & Companies..." />
            </div>
          </div>
          <div className="student-profile-right">
            <div className="student-profile-home">
              <i className="fa-solid fa-house"></i>
              <h6>Home</h6>
            </div>
            <div className="student-profile-network">
              <i className="fa-solid fa-user-group"></i>
              <h6>My Network</h6>
            </div>
            <div className="student-profile-jobs">
              <i className="fa-solid fa-suitcase"></i>
              <h6>Jobs</h6>
            </div>
            <div className="student-profile-message">
              <i className="fa-solid fa-message"></i>
              <h6>Messaging</h6>
            </div>
            <div className="student-profile-notification">
              <i className="fa-solid fa-bell"></i>
              <h6>Notifications</h6>
            </div>
            <div className="student-profile-me">
              <i className="fa-solid fa-user"></i>
              <div className="student-profile-down">
                <h6>Me</h6>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="student-profile-work">
              <i className="fa-solid fa-braille"></i>
              <div className="student-profile-down">
                <h6>Work</h6>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <a href="#">Try Premium for free</a>
          </div>
        </div>
      </nav>
      <div className="student-profile-container">
        <aside className="student-profile-aside">
          <div className="student-profile-sidebar">
            <div className="student-profile-top"></div>
            <img src="./Images/dp.jpg" alt="" />
            <div className="student-profile-profile">
              <a href="#">Akshay R Verma</a>
              <small>Front End Web Developer & Designer</small>
              <hr className="student-profile-hr-style" />
            </div>
            <div className="student-profile-view">
              <div className="student-profile-views">
                <h6>Who viewed your profile</h6>
                <a href="#">42</a>
              </div>
              <div className="student-profile-views">
                <h6>View of your post</h6>
                <a href="#">64</a>
              </div>
              <hr className="student-profile-hr-style" />
            </div>
            <div className="student-profile-premium">
              <h6>Access exclusive tools & insights</h6>
              <a href="#"><i className="fa-solid fa-box"></i>Try Premium for free</a>
              <hr className="student-profile-hr-style" />
            </div>
            <div className="student-profile-items">
              <i className="fa-solid fa-bookmark"></i>
              <h6>My Items</h6>
            </div>
          </div>
          <div className="student-profile-recent-jobs">
            <div className="student-profile-recent">
              <h6>Recent</h6>
              <div className="student-profile-one">
                <i className="fa-solid fa-users"></i>
                <h6>Web Designer, HTML & CSS...</h6>
              </div>
              <div className="student-profile-one">
                <i className="fa-solid fa-users"></i>
                <h6>The Flexbox Jobs...</h6>
              </div>
              <div className="student-profile-one">
                <i className="fa-solid fa-users"></i>
                <h6>Front End Developer Group</h6>
              </div>
              <div className="student-profile-one">
                <i className="fa-solid fa-users"></i>
                <h6>UI Developer / Front End...</h6>
              </div>
            </div>
            <div className="student-profile-groups">
              <h5>Groups</h5>
              <div className="student-profile-two">
                <i className="fa-solid fa-users"></i>
                <h6>Web Designer, HTML & CSS...</h6>
              </div>
              <div className="student-profile-two">
                <i className="fa-solid fa-users"></i>
                <h6>The Flexbox Jobs...</h6>
              </div>
              <div className="student-profile-two">
                <i className="fa-solid fa-users"></i>
                <h6>Front End Developer Group</h6>
              </div>
              <div className="student-profile-show">
                <h6>Show more</h6>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="student-profile-events">
              <h6>Events</h6>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="student-profile-discover">
              <a href="#">Discover more</a>
            </div>
          </div>
        </aside>
        <main>
          <div className="student-profile-main-section">
            <div id="student-profile-close"><i className="fa-solid fa-xmark"></i></div>
            <div className="student-profile-event">
              <h3>Upcoming event from LinkedIn</h3>
            </div>
            <div className="student-profile-box">
              <img src="./Images/event.png" alt="" />
              <div className="student-profile-content">
                <p>Join the next Career Talks virtual event to learn effective strategies for re-entering the workforce after taking a break</p>
              </div>
              <button className="student-profile-btn">Learn more</button>
            </div>
          </div>
          <div className="student-profile-media">
            <div className="student-profile-search">
              <img src="./Images/dp.jpg" alt="" />
              <input type="search" placeholder="Start a post" />
            </div>
            <div className="student-profile-posts">
              <div className="student-profile-post">
                <i className="fa-solid fa-image"></i>
                <h5>Photo</h5>
              </div>
              <div className="student-profile-post">
                <i className="fa-solid fa-video"></i>
                <h5>Video</h5>
              </div>
              <div className="student-profile-post">
                <i className="fa-solid fa-briefcase"></i>
                <h5>Job</h5>
              </div>
              <div className="student-profile-post">
                <i className="fa-solid fa-pen"></i>
                <h5>Write Article</h5>
              </div>
            </div>
          </div>
        </main>
        <div className="student-profile-right-side">
          <div className="student-profile-news">
            <h4>Linkedin News</h4>
            <i className="fa-solid fa-circle-info"></i>
          </div>
          <div className="student-profile-latest-news">
            <div className="student-profile-one">
              <i className="fa-solid fa-circle"></i>
              <h5>Preparing for virtual interviews</h5>
            </div>
            <div className="student-profile-two">
              <small>1d ago</small>
            </div>
          </div>
          <div className="student-profile-latest-news">
            <div className="student-profile-one">
              <i className="fa-solid fa-circle"></i>
              <h5>Biden visits US troops in Poland</h5>
            </div>
            <div className="student-profile-two">
              <small>13hr ago</small>
            </div>
          </div>
          <div className="student-profile-latest-news">
            <div className="student-profile-one">
              <i className="fa-solid fa-circle"></i>
              <h5>What Indian customers are spending on</h5>
            </div>
            <div className="student-profile-two">
              <small>1d ago</small>
            </div>
          </div>
          <div className="student-profile-latest-news">
            <div className="student-profile-one">
              <i className="fa-solid fa-circle"></i>
              <h5>Create your own career luck</h5>
            </div>
            <div className="student-profile-two">
              <small>3d ago</small>
            </div>
          </div>
          <div className="student-profile-latest-news">
            <div className="student-profile-one">
              <i className="fa-solid fa-circle"></i>
              <h5>The latest in the startup world</h5>
            </div>
            <div className="student-profile-two">
              <small>3d ago</small>
            </div>
          </div>
          <div className="student-profile-show-more">
            <h5>Show more</h5>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
