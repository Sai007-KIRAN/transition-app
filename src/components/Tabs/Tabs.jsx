import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contacts = [
    { id: 1, name: "Cheyenne Bergson", initials: "CB" },
    { id: 2, name: "Jonathan Higgins", initials: "JH" },
    { id: 3, name: "Capt. Trunk", initials: "CT" },
    { id: 4, name: "Hannibal Smith", initials: "HS" },
    { id: 5, name: "Capt. Trunk", initials: "CT" },
    { id: 6, name: "Hannibal Smith", initials: "HS" },
  ];

  return (
    <div className="tabs-container">
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className={`contact-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="avatar">{contact.initials}</div>
            <div className="name">{contact.name}</div>
          </div>
        ))}
      </div>
      <button className="messaging-button">Messaging</button>
    </div>
  );
};

export default Tabs;
