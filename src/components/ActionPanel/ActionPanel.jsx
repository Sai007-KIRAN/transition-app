import React from 'react';
import './ActionPanel.css';

const ActionPanel = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Ask Catura</h1>
        <div className="header-actions">
          <button>WhatsApp</button>
          <button>Greetings</button>
        </div>
      </header>

      <section className="greeting-section">
        <div className="greeting-template">
          <p>Greeting Template</p>
          <div className="greeting-actions">
            <button>Copy to Send</button>
            <button>Preview</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="message-input"
        />
        <button className="send-button">➤</button>
      </section>

      <section className="action-launcher">
        <h2>Action Launcher</h2>
        <input type="text" placeholder="Search actions..." />
        <div className="actions">
          <button>Add Action</button>
          <button>Fee Reversal</button>
          <button>Retail Onboarding</button>
          <button>Address Update</button>
        </div>
      </section>

      <section className="case-favorite">
        <h2>Case Favorite</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur. Et tincidunt</li>
          <li>Photo</li>
          <li>Lorem ipsum dolor sit amet consectetur. Et tincidunt</li>
        </ul>
      </section>
    </div>
  );
};

export default ActionPanel;
