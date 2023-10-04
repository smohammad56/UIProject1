import React, { useState } from "react";
import './bootstraptabs.css'
import Clock from './Clock'; // Import the Clock component
import './clock.css';
import Weather from './weather'; // Import the Weather component
import './weather.css';

function BootstrapTabs() {
  // State variable to keep track of the active tab
  const [activeTab, setActiveTab] = useState("windowOperation");

  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Content for each tab
  const tabContent = {
    windowOperation: (
      <div>
        Content for Window Operation Tab
      </div>
    ),
    homeScreen: (
      <div>
        {activeTab === "homeScreen" && <Clock /> && <Weather />} {/* Render Clock when Home Screen tab is active */}
      </div>
    ),
    tintControl: (
      <div>
        Content for Tint Control Tab
      </div>
    ),
  };

  return (
    <div className="tabs-container">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "windowOperation" ? "active" : ""}`}
            onClick={() => handleTabClick("windowOperation")}
            href="#"
          >
            Window Operation
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "homeScreen" ? "active" : ""}`}
            onClick={() => handleTabClick("homeScreen")}
            href="#"
          >
            Home Screen
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "tintControl" ? "active" : ""}`}
            onClick={() => handleTabClick("tintControl")}
            href="#"
          >
            Tint Control
          </a>
        </li>
      </ul>

      {/* Render the content based on the active tab */}
      {tabContent[activeTab]}
    </div>
  );
}

export default BootstrapTabs;
