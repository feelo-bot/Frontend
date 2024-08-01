// ActionProvider.js
import chattingData from '../assets/chattingData';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

    // 대화 데이터를 무작위로 선택하여 저장합니다.
    this.randomData = this.getRandomChattingData();
  }

  handleDefault = () => {
    const message = this.createChatBotMessage("다시 입력해 주세요");
    this.setChatbotMessage(message);
  };

  handleUserResponse = (userInput) => {
    // 사용자 입력과 현재 대화 데이터 비교
    if (userInput === this.randomData.answer) {
      const message = this.createChatBotMessage("정답입니다!");
      this.setChatbotMessage(message);
    } else if (userInput === this.randomData.wrong1 || userInput === this.randomData.wrong2) {
      const message = this.createChatBotMessage("오답입니다.");
      this.setChatbotMessage(message);
    } else {
      this.handleDefault();
    }
  };

  getRandomChattingData = () => {
    const randomIndex = Math.floor(Math.random() * chattingData.length);
    return chattingData[randomIndex];
  };

  setChatbotMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // 이 메서드는 사용자의 입력을 처리하는 핸들러로 사용할 수 있습니다.
  handleMessage = (message) => {
    this.handleUserResponse(message);
  };
}

export default ActionProvider;
