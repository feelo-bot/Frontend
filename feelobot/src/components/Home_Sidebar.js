import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import { IoPersonCircle } from "react-icons/io5";
import logo from '../assets/로고.png';

function Home_Sidebar() {
  // 상태를 초기화합니다. 로컬 스토리지에서 데이터를 불러옵니다.
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [disability, setDisability] = useState('');

  // 나이 옵션을 생성합니다.
  const ageOptions = Array.from({ length: 100 }, (_, index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ));

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const savedName = localStorage.getItem('name');
    const savedAge = localStorage.getItem('age');
    const savedGender = localStorage.getItem('gender');
    const savedDisability = localStorage.getItem('disability');

    if (savedName) setName(savedName);
    if (savedAge) setAge(savedAge);
    if (savedGender) setGender(savedGender);
    if (savedDisability) setDisability(savedDisability);
  }, []);

  useEffect(() => {
    // 상태가 변경될 때 로컬 스토리지에 데이터 저장하기
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('disability', disability);
  }, [name, age, gender, disability]);

  return (
    <nav className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '30px' }}>
        <IoPersonCircle size={28} />
        <h3 style={{ margin: 0 }}>{name}</h3> {/* 상태에 따라 이름을 표시합니다. */}
      </div>
      
      <div className="speech-bubble">
        필로봇에 온 걸 환영해!<br/>
        너에 대해 설명해줘
      </div>
      
      <img src={logo} className="sidebar-logo" alt="로고" />
      
      <form className="sidebar-form">
        <div className="form-group">
          <label htmlFor="name">이름 :</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="이름을 입력하세요" 
            value={name} /* 상태 값을 input의 value로 설정합니다. */
            onChange={(e) => setName(e.target.value)} /* 입력값 변경 시 상태 업데이트 */
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">나이 :</label>
          <select 
            id="age" 
            name="age" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">선택하세요</option>
            {ageOptions}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">성별 :</label>
          <select 
            id="gender" 
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="disability">장애분류 :</label>
          <select 
            id="disability" 
            name="disability"
            value={disability}
            onChange={(e) => setDisability(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="autism-level-1">자폐 1급</option>
            <option value="autism-level-2">자폐 2급</option>
            <option value="autism-level-3">자폐 3급</option>
          </select>
        </div>
      </form>
    </nav>
  );
}

export default Home_Sidebar;
