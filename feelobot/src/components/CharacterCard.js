import React from 'react';
import '../styles/CharacterCard.css';

function CharacterCard({ img, name, tags, description, effects, likeCount }) {
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
      {description && <p className="description">{description}</p>}
      {effects && (
        <ul className="effects">
          {effects.map((effect, index) => (
            <li key={index}>{effect}</li>
          ))}
        </ul>
      )}
      <button className="select-button">대화 시작하기</button>
    </div>
  );
}

export default CharacterCard;
