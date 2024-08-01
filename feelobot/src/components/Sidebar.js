import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import { IoPersonCircle, IoHome } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import logo from '../assets/로고.png';
import characterData from '../assets/characterData';

function Sidebar() {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '30px' }}>
        <IoPersonCircle size={28} />
        <h2 style={{ margin: 0 }}>이성현</h2>
      </div>
      <ul>
        <li>
          <NavLink exact={true.toString()} to="/" className={location.pathname === '/' ? 'active' : ''}>
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
            {characterData
              .filter(character => character.chatRoomCreated) // Filter characters with chatRoomCreated as true
              .map((character, index) => (
                <li className="nested-item" key={index}>
                  <NavLink to={`/chatting?name=${encodeURIComponent(character.name)}`} className={location.pathname === `/chatbot` ? 'active' : ''}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={character.img} alt={character.name} style={{ width: '25px', height: '25px', marginRight: '10px', borderRadius: '50%' }} />
                  {character.name}
                  </div>
                  </NavLink>
                </li>
            ))}
          </ul>
        </li>
      </ul>
      <img src={logo} className="sidebar-logo" alt="로고"/>
    </nav>
  );
}

export default Sidebar;
