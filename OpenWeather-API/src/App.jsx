import { useState } from 'react'
import './App.css'
import axios from 'axios';
import styled from 'styled-components';


function App() {
 // OPEN API : 해당 지역의 날씨 정보를 출력 
 // 해당지역

  const [location, setLocation] = useState('');

  // API에서 받아온 값을 주입 : JSON  
  const [result , setResult] = useState({});

  const searchWeather = () => {


  }

  return (
    <>
      <div>
        <h1>Open API를 사용해서 axios를 사용해서 날씨데이터 출력</h1>
        <p/> <p/>
        <input placeholder='도시명을 영문으로 입력하세요' 
              type='text'
              value={location}
              onChange={(e)=> {setLocation(e.target.value)}}
              onKeyDown={searchWeather}        
        
        />
      </div>
      
    </>
  )
}

export default App
