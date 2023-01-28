import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin Panel</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.pexels.com/photos/1850728/pexels-photo-1850728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
