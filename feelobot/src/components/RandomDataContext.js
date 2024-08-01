// RandomDataContext.js
import React, { createContext, useContext, useState } from 'react';
import chattingData from '../assets/chattingData';

const RandomDataContext = createContext();

export const useRandomData = () => useContext(RandomDataContext);

const getRandomChattingData = () => {
  const randomIndex = Math.floor(Math.random() * chattingData.length);
  return chattingData[randomIndex];
};

export const RandomDataProvider = ({ children }) => {
  const [randomData, setRandomData] = useState(getRandomChattingData());

  const reloadRandomData = () => {
    setRandomData(getRandomChattingData());
  };

  return (
    <RandomDataContext.Provider value={{ randomData, reloadRandomData }}>
      {children}
    </RandomDataContext.Provider>
  );
};
