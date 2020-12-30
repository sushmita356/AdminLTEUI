import React from "react";
import "../App.css";
import sidebardata from './Sidebardata';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarlist">
        {sidebardata.map((val, key) => {
          return (
            <li className="row" key={key} onClick={()=>{window.location.pathname=val.link}}>
              {" "}
              <div id="icon">{val.icon}</div>
              {""}
              <div id="title">{val.title}</div>
              {""}
              <div id="pull">{val.pull}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;