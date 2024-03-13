
import './App.css';
import React , { useEffect, useReducer } from 'react';

// Routing 처리 라이브러리 import <--요청 ( /company)  ==> 요청에 대해서 컴포넌트를 연결
// route를 사용하려면 routes가 필요 , link도 필요함
// Routes, Route :  controller 역할을 한다. [요정 정보를 받아서 요청에 대한 View (컴포넌트) 연결]
// Link , useNavigate : 요청을 보내는 역할
import {  Routes, Route, Link , useNavigate } from'react-router-dom';

import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImageTest from './test/ImageTest';

//  nockData : 가짜 데이터
const mockData = [
  {
      id : "mock1",
      date:new Date().getTime() -1,  // 어제날짜
      content : "mock1",
      emotionId : 2
  },

  {
    id : "mock2",
    date:new Date().getTime() -2,  // 2일 전
    content : "mock2",
    emotionId : 3
  },
  
  {
    id : "mock3",
    date:new Date().getTime() -3,  // 3일 전
    content : "mock3",
    emotionId : 4
  },

];

/*
    ★★ 리엑트의 문제점 : 컴포넌트와 컴포넌트 사이의 값을 넘겨줌의 문제 
    
    ☆☆ 상태 관리 : context , 리덕스 , 몹엑스?

        - context 는 별도의 라이브러이 설치 없이 사용
        - SPA 에서 컴포넌트 사이에 상태 (변수의 값)을 전송 ,
        - 부모 -> 자식 props를 사용해야만 전송

        1. const DiaryStateContext = React.createContext() 를 사용해서 context 생성
        2. Provide를 사용해서 컴포넌트를 묶어줘야함 , state 를 내려 보내줄 수 있다. 이벤트를 받아올 수 있다.
        3. useContext : 상태 값을 가져와서 사용함
        4. userReducer를 사용해서 contextdml 상태값을 변경함
*/



// 1. Context 선언 : 상태 값을 처리 , 이벤트 처리
export const DiaryStateContext = React.createContext();   // 상태값을 전송하는 context
export const DiaryDispatchContext = React.createContext();   // 이벤트를 처리하는 context ,  상태값을 변경

// 상태값을 변경하는 reducer 함수 정의
function reducer (state, action) {     // 밑에 있는   data가 state 로 들어오게 됨
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      return [action.data, ...state];

  }
}     


function App() {

  // 상태를 처리하는 변수
  const [data , dispatch] = useReducer(reducer,[]);   // dispatch를 통해서 reducer를 호출함, return값으로 아래의 배열안에 nockdata가  data로 값이 들어옴

  // useEffect 컴포넌트가 로드될 때 1번만 실행
  // 컴포넌트가 처름 로드될 때 dispatch를 호출해서 data에 mockData의 값을 할당
  useEffect( () => {      // 1번째 인자 : 함수 , 2번째 인자 : 
    dispatch ({

      type : "INIT",
      data : mockData

    });

  }
    ,[]
  
  );

  // 하위 컴포넌트에서 요청하는 이벤트 처리 : onCreate , onUpdate , onDelete

  const onCreate = () => {

  }

  const onUpdate = () => {

  }

  const onDelete = () => {

  }

  return (

// 2. context provider를 사용해서 상태를 처리할 하위 컴포넌트를 그룹핑
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{onCreate , onUpdate , onDelete}}>  {/* 하위 컴포넌트에서 이벤트가 올라옴  */}
      
    



    <div className="App">
        <h1>다이어리 APP</h1>


    <Header/>
    <hr/>
    <p/><p/><p/><p/><p/><p/><p/>
  

    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/new' element={<New/>}></Route>
      <Route path='/diary/:id' element={<Diary/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>

      <Route path='/btntest' element={<ButtonTest/>}></Route>
      <Route path='/imgtest' element={<ImageTest/>}></Route>


    </Routes>

    <p/><p/><p/><p/><p/><p/><p/>
    <hr/>
    <Footer/>


    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
  
}

export default App;
