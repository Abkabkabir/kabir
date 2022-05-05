import React from 'react';
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, PersonOutline,
Storefront,
AttachMoney,
BarChart,
MailOutline,
DynamicFeed,
ChatBubbleOutline,
WorkOutline,
Report,
 } from "@mui/icons-material";

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarlist">
              <li className="sidebarListItem active">
               <LineStyle className="sidebarIcon" /> 
               Home
              </li>
              <li className="sidebarListItem">
               <Timeline  className="sidebarIcon" /> 
               Analytics
              </li>
              <li className="sidebarListItem">
               <TrendingUp  className="sidebarIcon" /> 
               Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick menu</h3>
            <ul className="sidebarlist">
              <li className="sidebarListItem active">
               <PersonOutline className="sidebarIcon" /> 
               Users
              </li>
              <li className="sidebarListItem">
               <Storefront  className="sidebarIcon" /> 
               Products
              </li>
              <li className="sidebarListItem">
               <AttachMoney  className="sidebarIcon" /> 
               Transactions
              </li>
              <li className="sidebarListItem">
               <BarChart  className="sidebarIcon" /> 
               Reports
              </li>
            </ul>
          </div> 
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarlist">
              <li className="sidebarListItem active">
               <MailOutline className="sidebarIcon" /> 
               Mail
              </li>
              <li className="sidebarListItem">
               <DynamicFeed  className="sidebarIcon" /> 
               Feedback
              </li>
              <li className="sidebarListItem">
               <ChatBubbleOutline  className="sidebarIcon" /> 
               Messages
              </li>
            </ul>
          </div> <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarlist">
              <li className="sidebarListItem active">
               <WorkOutline className="sidebarIcon" /> 
               Manage
              </li>
              <li className="sidebarListItem">
               <Timeline  className="sidebarIcon" /> 
               Analytics
              </li>
              <li className="sidebarListItem">
               <Report className="sidebarIcon" /> 
               Reports
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
