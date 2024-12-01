import React from "react";
import Tabs from "./components/Tabs/Tabs";
import CustomerDetails from "./components/CustomerDetails/CustomerDetails";
import ConversationSection from "./components/ConversationSection/ConversationSection";
import ActionPanel from "./components/ActionPanel/ActionPanel";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css"; // For styling

const App = () => {
  return (
    <div className="app-container">
      {/* Tabs Section */}

      <Header />

      <Tabs />

      <Sidebar />

      {/* Content Area */}
      <div className="content-area">
        {/* Customer Details Section */}
        <CustomerDetails />

        {/* Conversation Section */}
        <ConversationSection />

        {/* Action Panel Section */}
        <ActionPanel />
      </div>
    </div>
  );
};

export default App;
