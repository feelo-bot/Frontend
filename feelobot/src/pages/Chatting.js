import React, { useEffect, useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useLocation } from 'react-router-dom';
import createConfig from "../components/config";  // Import the function
import MessageParser from "../components/MessageParser";
import ActionProvider from "../components/ActionProvider";
import Sidebar from '../components/Sidebar';
import comment from '../assets/대화.png';
import '../styles/Chatbot.css';
import assetsindex from '../assets/index';

function Chatting() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const index = parseInt(queryParams.get('index'), 10);  // Parse index as integer

  const [prevName, setPrevName] = useState(name);
  const [prevIndex, setPrevIndex] = useState(index);

  useEffect(() => {
    if (assetsindex.length > 0) {
      assetsindex[0].num = index;
      assetsindex[0].name = name;
    }

    // Check if either name or index has changed
    if (name !== prevName || index !== prevIndex) {
      // Update previous values
      setPrevName(name);
      setPrevIndex(index);
      // Reload the window
      window.location.reload();
    }
  }, [name, index, prevName, prevIndex]); // Dependency array

  // Create the config using the index
  const config = createConfig(index);

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
