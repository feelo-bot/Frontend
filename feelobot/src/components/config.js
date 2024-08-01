import { createChatBotMessage } from "react-chatbot-kit";
import chattingData from '../assets/chattingData';
import characterData from '../assets/characterData';

// Function to create the config object based on the index
const createConfig = (index) => {
  // Ensure index is within bounds
  if (index < 0 || index >= chattingData.length) {
    throw new Error('Index out of bounds');
  }

  // Get data based on index
  const data = chattingData[index];
  
  // Options array
  const options = [
    data.answer,
    data.wrong1,
    data.wrong2
  ];
  
  // Shuffle options
  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const shuffledOptions = shuffleArray(options);

  // Add numbers before each option
  const numberedOptions = shuffledOptions.map((option, idx) => `${idx + 1}. ${option}`);

  // Create initial messages
  const initialMessages = [
    createChatBotMessage(`💬 ${data.situation}`)
  ];

  // Add each option as a separate message
  numberedOptions.forEach(option => {
    initialMessages.push(createChatBotMessage(option));
  });

  // Return the config object
  return {
    botName: "ChatBot",
    initialMessages: initialMessages,
  };
};

export default createConfig;
