// config.js
import { createChatBotMessage } from "react-chatbot-kit";
import chattingData from '../assets/chattingData';

// 랜덤으로 항목을 선택하는 함수
function getRandomChattingData() {
  const randomIndex = Math.floor(Math.random() * chattingData.length);
  return chattingData[randomIndex];
}

// 랜덤으로 선택된 대화 데이터 가져오기
const randomData = getRandomChattingData();

// 항목을 배열로 만들어서 무작위로 섞기
const options = [
  randomData.answer,
  randomData.wrong1,
  randomData.wrong2
];

// 배열을 무작위로 섞는 함수
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// 무작위로 섞인 옵션 배열
const shuffledOptions = shuffleArray(options);

// 초기 메시지 생성
const initialMessage = createChatBotMessage(
  `💬 ${randomData.situation}\n${shuffledOptions.join('\n')}`,
);

const config = {
  botName: "ChatBot",
  initialMessages: [initialMessage],
};

export default config;
