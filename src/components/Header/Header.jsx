import React from "react";
import "./Header.css"; // Import the CSS for styling

const Header = () => {
  return (
    <div className="header">
      {/* Left Section */}
      <div className="header-left">
        <p className="breadcrumb">Chat / Feed chat</p>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <button className="role-button process-owner">Process Owner HOD</button>
        <button className="role-button admin">Admin</button>
        <div className="user-details">
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile picture URL
            alt="User"
            className="profile-picture"
          />
          <span className="username">Palak Bansal</span>
        </div>
        <span className="icon settings">⚙️</span>
        <span className="icon logout">🔁 Logout</span>
      </div>
    </div>
  );
};

export default Header;
