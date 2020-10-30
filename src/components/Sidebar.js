import React from "react";
import "../css/Sidebar.css";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from "@material-ui/icons";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />
      <SidebarOptions text="Home" Icon={Home} active />
      <SidebarOptions text="Explore" Icon={Search} />
      <SidebarOptions text="Notifications" Icon={NotificationsNone} />
      <SidebarOptions text="Messages" Icon={MailOutline} />
      <SidebarOptions text="Bookmarks" Icon={BookmarkBorder} />
      <SidebarOptions text="Lists" Icon={ListAlt} />
      <SidebarOptions text="Profile" Icon={PermIdentity} />
      <SidebarOptions text="More" Icon={MoreHoriz} />

      <Button variant="outlined" className="sidebar--yarn" fullWidth>
        YARN
      </Button>
    </div>
  );
}

export default Sidebar;
