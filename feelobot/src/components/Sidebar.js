import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { IoPersonCircle, IoHome } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import minsoo from '../assets/민수.png';
import logo from '../assets/로고.png';
import characterData from '../assets/characterData';

function Sidebar() {
  
  return (
    <nav className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '30px' }}>
        <IoPersonCircle size={28} />
        <h2 style={{ margin: 0 }}>이성현</h2>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IoHome size={22} />
              Home
            </div>
          </NavLink>
        </li>
        <li>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <TbMessageChatbot size={22} />
              Chatbot
            </div>
          <ul>
            <li className="nested-item">
            <NavLink to="/chatbot" activeClassName="active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={minsoo} alt="민수" style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius : '50%' }} />
              민수
              </div>
              </NavLink>
              
            </li>
          </ul>
        </li>
      </ul>
      <img src={logo} className="sidebar-logo" alt="로고"/>
    </nav>
  );
}

export default Sidebar;
