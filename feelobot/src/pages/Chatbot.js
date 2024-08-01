import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import chattingData from '../assets/chattingData';
import comment from '../assets/대화.png';
import smile from '../assets/smile.png';
import cry from '../assets/cry.png';
import '../styles/Chatbot.css';

function Chatbot() {
    const [currentChat, setCurrentChat] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [feedbackImage, setFeedbackImage] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    const loadNewChat = () => {
        const randomChat = chattingData[Math.floor(Math.random() * chattingData.length)];
        const answers = [randomChat.correct, randomChat.wrong1, randomChat.wrong2];
        const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
        setCurrentChat(randomChat);
        setOptions(shuffledAnswers);
        setSelectedAnswer("");
        setFeedback("");
        setFeedbackImage(null);
        setFeedbackMessage("");
        setIsCorrect(false);  // Reset isCorrect when loading new chat
    };

    useEffect(() => {
        loadNewChat();
    }, []);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (answer === currentChat.correct) {
            setFeedbackImage(smile);
            setFeedbackMessage(
                `정답이에요!\n\n 🌈 이런 대답도 할 수 있어요! \n- ${currentChat.similar1}\n- ${currentChat.similar2}\n- ${currentChat.similar3}`
            );
            setFeedback("정답입니다!");
            setIsCorrect(true);  // Mark as correct
        } else {
            setFeedbackImage(cry);
            setFeedbackMessage(
                `다시 한 번 도전해볼래요?\n\nhint 🤔 친구가 울고 있어요.`
            );
            setFeedback("틀렸습니다.");
            setIsCorrect(false);  // Mark as incorrect
        }
    };

    const handleRetry = () => {
        loadNewChat();
    };

    return (
        <div className="chatbot-container">
            <Sidebar />
            <main className="main-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '15px' }}>
                    <img src={comment} alt="대화" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                    <h1>'{name}'와의 대화</h1>
                </div>
                <div className="chat-container">
                    {currentChat && (
                        <>
                            <div className="chat">
                                <p>💬 {currentChat.situation}</p>
                            </div>
                            <div className="chat">
                                <p>⁉️ 답변</p>
                            </div>
                            <div className="options">
                                {options.map((option, index) => (
                                    <button key={index} onClick={() => handleAnswerClick(option)}>
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {feedbackImage && feedbackMessage && (
                                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                                    {feedbackImage && (
                                        <img 
                                            src={feedbackImage} 
                                            alt="피드백" 
                                        />
                                    )}
                                    <p>{feedbackMessage}</p>
                                    {isCorrect && (
                                        <button onClick={handleRetry}>다른 상황 연습하기</button>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Chatbot;
