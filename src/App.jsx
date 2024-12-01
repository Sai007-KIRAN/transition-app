import React from "react";
import Tabs from "./components/Tabs/Tabs";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";
import ConversationSection from "./components/ConversationSection/ConversationSection";
import ActionPanel from "./components/ActionPanel/ActionPanel";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Escalate from "./components/Escalate/Escalate";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Header */}

      <div className="main-content">
        {/* Sidebar */}
        <Sidebar />

        <div className="main-section">
        <Header />
          {/* Tabs */}
          <Tabs />

          <div className="content-area">
            {/* Customer Details */}
            <CustomerDetails />

            
            <div>
            <Escalate />
            <ConversationSection />
            </div>

            {/* Action Panel */}
            <ActionPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
