// MessageParser.js
import ActionProvider from '../components/ActionProvider';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // 사용자 입력을 처리하기 위해 ActionProvider의 handleMessage 메서드를 호출합니다.
    this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
