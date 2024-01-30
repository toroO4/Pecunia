import React from 'react';
import * as AboutFunctions from '../components/About';
import * as TabsFunctions from '../components/Tabs';

const StudentPage = () => {
  return (
    <div className="StudentHomepage">
      <nav className="navbar">
      <div className="logo">
        Your Logo
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>

    <div className="profile">
      <img className="profile-picture" src="your-profile-picture-url" alt="Profile" />
      <div className="profile-info">
        <h2>Your Name</h2>
        <p>Email: your.email@example.com</p>
        <p>Location: Your City, Country</p>
        {/* Additional profile information can be added here */}
      </div>
    </div>


    <div className="dashboard">
      <div className="dashboard-title">
        Your Dashboard
        </div>
      <div className="dashboard-stats">
        <div className="stat-item">
          <div className="stat-value">217</div>
          <div className="stat-label">Views today</div>
        </div>
        {/* Add more stat items here */}
      </div>
      <div className="dashboard-link">Go to stats</div>
    </div>

    <div className="Tabs">
      <div
        className={`Tab ${TabsFunctions === 'Tab1' ? 'active' : ''}`}
        onClick={() => TabsFunctions('Tab1')}
      >
        Tab 1
      </div>
      <div
        className={`Tab ${TabsFunctions === 'Tab2' ? 'active' : ''}`}
        onClick={() => TabsFunctions('Tab2')}
      >
        Tab 2
      </div>
      <div
        className={`Tab ${TabsFunctions === 'Tab3' ? 'active' : ''}`}
        onClick={() => TabsFunctions('Tab3')}
      >
        Tab 3
      </div>
    </div>

    <div className="about">
      <div className="about-title">
        About Us
      </div>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {AboutFunctions && (
          <p>
            Additional information about your company or project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="see-more" onClick={AboutFunctions}>
        {AboutFunctions ? 'See Less' : 'See More'}
      </div>
    </div>

    <div className="Skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

    <div className="EndorsementContainer">
      <h2>Endorsements</h2>
      <div className="Endorsement">
        <h3>Endorser 1</h3>
        <p>"Great team player, always delivers quality work."</p>
      </div>

      <div className="Endorsement">
        <h3>Endorser 2</h3>
        <p>"Excellent problem-solving skills and quick learner."</p>
      </div>

      <div className="Endorsement">
        <h3>Endorser 3</h3>
        <p>"Outstanding communication skills and attention to detail."</p>
      </div>
    </div>

    <div className="Rectangle21"></div>
    <div className="Group1">
      <h2>Group1 Title</h2>
      <p>Some text or content for Group1.</p>
      {/* Add more elements as needed */}
    </div>
    <div className="Group2">
      <h2>Group2 Title</h2>
      <p>Some text or content for Group2.</p>
      {/* Add more elements as needed */}
    </div>
    <div className="Group3">
      <h2>Group3 Title</h2>
      <p>Some text or content for Group3.</p>        
      {/* Add more elements as needed */}
    </div>
    <div className="Group4">
      <h2>Group4 Title</h2>
      <p>Some text or content for Group4.</p>
      {/* Add more elements as needed */}
    </div>

  </div>
  );
};

export default StudentPage;















