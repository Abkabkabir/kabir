import React from 'react';
import Sidebar from "./Components/Sidebar/sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css"
import  Home  from "./Pages/home";

function App() {
  return <div className="App">
              <Topbar />
              <div className="container">
                <Sidebar/>
                <Home/>
              </div>
            </div>;
 
}

export default App;

