import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CharacterCard.css';
import chattingData from '../assets/chattingData';

function CharacterCard({ img, name, tags, description, effects, likeCount, ment }) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 처리
  const randomIndex = Math.floor(Math.random() * chattingData.length);
  // 버튼 클릭 시 호출될 함수
  const handleStartChat = () => {
    navigate(`/chatting?name=${encodeURIComponent(name)}&&index=${randomIndex}`);
  };

  return (
    <div className="character-card">
      <div className="character-card-content">
        <img src={img} alt={name} className="character-image" />
        <div>
          <h3>{name}</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="like-count">❤️ {likeCount}</p>
        </div>
      </div>
      <div style={{color: "gray", alignContent:"center"}}>
        {ment}
      </div>
      {description && <p className="description">{description}</p>}
      {effects && (
        <ul className="effects">
          {effects.map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      )}
      <button className="select-button" onClick={handleStartChat}>
        대화 시작하기
      </button>
    </div>
  );
}

export default CharacterCard;
