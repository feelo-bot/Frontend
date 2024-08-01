import chattingData from '../assets/chattingData';
import index from '../assets/index';  // Import the index data

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

    // Use the index to get the specific chat data
    this.currentIndex = index[0]?.num || 0; // Default to 0 if index is not available
    this.randomData = chattingData[this.currentIndex];
  }

  handleDefault = () => {
    const message = this.createChatBotMessage("다시 입력해 주세요");
    this.setChatbotMessage(message);
  };

  handleUserResponse = (userInput) => {
    const trimmedInput = userInput.trim();

    console.log('User input:', trimmedInput);
    console.log('Correct answer:', this.randomData.answer);
    console.log('Wrong 1:', this.randomData.wrong1);
    console.log('Wrong 2:', this.randomData.wrong2);
    console.log("--------");
    console.log(trimmedInput);

    if (trimmedInput === this.randomData.answer) {
      const similarMessages = [
        this.randomData.similar1,
        this.randomData.similar2,
        this.randomData.similar3
      ].filter(Boolean);  // Filter out any undefined values

      const message = this.createChatBotMessage("😁 정답! 아래의 문장들도 정답이 될 수 있어");
      this.setChatbotMessage(message);

      // Add similar messages
      similarMessages.forEach(similarMessage => {
        const similarMsg = this.createChatBotMessage(similarMessage);
        this.setChatbotMessage(similarMsg);
      });

      // Load new data (optional)
      this.randomData = this.getRandomChattingData();
    } else if (trimmedInput === this.randomData.wrong1 || trimmedInput === this.randomData.wrong2) {
      const message = this.createChatBotMessage("😥 다시 한번 도전해 볼래?");
      this.setChatbotMessage(message);
      
      const hintMessage = this.createChatBotMessage("💡 힌트 : " + this.randomData.hint);
      this.setChatbotMessage(hintMessage);
    } else {
      this.handleDefault();
    }
  };

  getRandomChattingData = () => {
    return chattingData[this.currentIndex];
  };

  setChatbotMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleMessage = (message) => {
    this.handleUserResponse(message);
  };
}

export default ActionProvider;
