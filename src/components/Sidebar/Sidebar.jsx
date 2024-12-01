// import React from "react";
// import "./Sidebar.css"; // Import the CSS for styling

// const Sidebar = () => {
//   const menuItems = [
//     { icon: "📄", label: "Internal Audit" },
//     { icon: "📄", label: "UAT Testing" },
//     { icon: "🔗", label: "Intract" },
//     { icon: "👤", label: "Queue", active: true },
//     { icon: "🛠️", label: "Workflow" },
//     { icon: "👤", label: "Admin" },
//     { icon: "📦", label: "Asset" },
//     { icon: "👨‍👩‍👦", label: "Parent", submenu: ["Option One", "Option Two"] },
//     { icon: "⚙️", label: "All Accessories" },
//     { icon: "⭐", label: "Decorating" },
//     { icon: "📦", label: "Presenting" },
//   ];

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <img
//           src="https://via.placeholder.com/150x50" // Replace with your logo URL
//           alt="Risk Hawk Logo"
//           className="logo"
//         />
//         <p className="tagline">Manage your exposures</p>
//       </div>

//       <ul className="menu">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className={`menu-item ${item.active ? "active" : ""}`}
//           >
//             <span className="icon">{item.icon}</span>
//             <span className="label">{item.label}</span>
//             {item.submenu && <span className="submenu-icon">▶</span>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import "./Sidebar.css"; // Import the CSS for styling

const Sidebar = () => {
  const menuItems = [
    { icon: "📄", label: "Internal Audit" },
    { icon: "📄", label: "UAT Testing" },
    { icon: "🔗", label: "Intract" },
    { icon: "👤", label: "Queue", active: true },
    { icon: "🛠️", label: "Workflow" },
    { icon: "👤", label: "Admin" },
    { icon: "📦", label: "Asset" },
    { icon: "👨‍👩‍👦", label: "Parent", submenu: ["Option One", "Option Two"] },
    { icon: "⚙️", label: "All Accessories" },
    { icon: "⭐", label: "Decorating" },
    { icon: "📦", label: "Presenting" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://via.placeholder.com/150x50" // Replace with your logo URL
          alt="Risk Hawk Logo"
          className="logo"
        />
        <p className="tagline">Manage your exposures</p>
      </div>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.submenu && <span className="submenu-icon">▶</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
