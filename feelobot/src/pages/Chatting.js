import React from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useLocation } from 'react-router-dom';
import config from "../components/config";
import MessageParser from "../components/MessageParser";
import ActionProvider from "../components/ActionProvider";
import Sidebar from '../components/Sidebar';
import comment from '../assets/대화.png';
import '../styles/Chatbot.css';

function Chatting() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
    return (
      <div className="chatbot-container">
      <Sidebar />
      <main className="main-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '15px' }}>
              <img src={comment} alt="대화" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
              <h1>'{name}'와의 대화</h1>
          </div>
          <div className="chat-container">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
          </div>
      </main>
  </div>

      );
}

export default Chatting;
