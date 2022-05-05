import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='topbar'>
           <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">kabir</span>
               </div>
               <div className="topRight">
                  <div className="topbariconcontainer">
                    <NotificationsNone />
                    <span className="topiconbadge">2</span>           
                  </div>
                  <div className="topbarIconcontainer">
                    <Language />
                    <span className="topIconbadge">2</span>           
                  </div>      
                   <div className="topbarIconcontainer">
                    <Settings />      
                  </div>
                  <img src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-debug=1" alt="" className="topAvartar" /> 
                </div> 
           </div>      
       </div>          
    );
}
