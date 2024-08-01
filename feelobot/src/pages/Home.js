import React from 'react';
import Home_Sidebar from '../components/Home_Sidebar';
import CharacterCard from '../components/CharacterCard';
import '../styles/Home.css';
import characterData from '../assets/characterData';
import robot from '../assets/로봇.png';

function Home() {
  return (
    <div className="home">
      <Home_Sidebar />
      <main className="main-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', left : '10px'}}>
          <img src={robot} alt="로봇" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
          <h1>캐릭터 선택하기</h1>
        </div>
        <div className="character-selection">
          {characterData.map((character, index) => (
            <CharacterCard
              key={index}
              img={character.img}
              name={character.name}
              age={character.age}
              tags={character.tags}
              description={character.description}
              effects={character.effects}
              likeCount={character.likeCount}
              ment = {character.ment}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
