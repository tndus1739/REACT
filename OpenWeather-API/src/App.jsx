import { useState } from 'react'
import './App.css'
import axios from 'axios';
import styled from 'styled-components';


function App() {

 //const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6bedce92f708cdeb65b084ee01b825c0`;   ?뒤에는 변수값

 // OPEN API : 해당 지역의 날씨 정보를 출력 
 // 해당지역

  const [location, setLocation] = useState('');

  const key = `6bedce92f708cdeb65b084ee01b825c0`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
  // API에서 받아온 값을 주입 : JSON  
  const [result , setResult] = useState({});

  const searchWeather = async(e) => {

    if (e.key ==='Enter') {
      // axios를 사용해서 API 통신으로 값을 받아옴
      try {
          const data = await axios({   // axios.get() : 이런식으로 작성해도 됨 [지금은 풀어서 작성한 것] (ex: axios.get('/user?ID=12345'))
            method : 'get',            // get 방식으로 요청을 보냄
            url : url,
          })
          setResult(data);
          console.log("성공 :" , data );
          
          
      } catch (err) {
        console.log("에러발생 : " ,err);
      }
    }


  }

  return (
    <Appwap>
      <div className='appContentWrap'>
        <h3>Open API를 사용해서 axios를 사용해서 날씨데이터 출력</h3>
        <p/> <p/>
        <input placeholder='도시명을 영문으로 입력하세요' 
              type='text'
              value={location}
              onChange={(e)=> {setLocation(e.target.value)}}
              onKeyDown={searchWeather}   // 키 눌렀을 때 searchWeather 함수 작동     
              
        />

        <p/><p/><p/>
        {/* result 값이 존재할 때 출력
        
            참 && : 반드시 실행하는 블락
            거짓 && : 쇼트서킷 : 실행이 안됨 
         */}
        {
          Object.keys(result).length !== 0 && (

            
            <div>

              <div>도시명 : {result.data.name}</div>                                                {/* result : 오브젝트    result.data -> 객체 */}
              <div>기온 : {Math.round((result.data.main.temp - 237.15) *10 ) / 10 }도(c)</div>      
              {/* temp : 화씨 ////  '도' 로 변경하는 법 : Math.round((result.data.main.temp - 237.15) *10 ) / 10  */}
              <div>날씨 : {result.data.weather[0].main}</div>                                       {/* weather[0] : weather의 0번째 방*/}
            </div>
          )
        }
      </div>
      
    </Appwap>
  )
}

export default App


// styled-components 라이브러리를 사용해서 css 적용
  // 컴포넌트 내부에서 css적용
  // 백틱안에 잘 들어가 있어야 함

const Appwap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a6d5cc;

  .appContentWrap {
    color: #5597a6;
    left : 50%;
    top : 50%;
    position : absolute;
    padding : 20px;
    transform : translate(-50%, -50%);

  }

  input {    
    padding : 16px;
    border: 2px solid #8e66d3;
    background-color: #ffd9e5f2;
    border-radius: 10px;
    width : 80%;
    font-size : 15px;
  }

` 