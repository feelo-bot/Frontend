import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';
import { IoPersonCircle, IoHome } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import characterData from '../assets/characterData';
import chattingData from '../assets/chattingData';

function Sidebar() {
  const location = useLocation();
  const randomIndex = Math.floor(Math.random() * chattingData.length);
  return (
    <nav className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '30px' }}>
        <IoPersonCircle size={28} />
        <h3 style={{ margin: 0 }}>{localStorage.getItem('name')}</h3>
      </div>
      <ul>
        <li>
          <NavLink exact="true" to="/" className={location.pathname === '/' ? 'active' : ''}>
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
                  <NavLink to={`/chatting?name=${encodeURIComponent(character.name)}&&index=${randomIndex}`} className={location.pathname === `/chatbot` ? 'active' : ''}>
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
    </nav>
  );
}

export default Sidebar;
