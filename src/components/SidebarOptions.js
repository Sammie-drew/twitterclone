import React from "react";
import "../css/SidebarOptions.css";

function SidebarOptions({ active, text, Icon }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
