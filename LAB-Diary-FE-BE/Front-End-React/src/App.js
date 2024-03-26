
import './App.css';
import React , { useEffect, useReducer, useRef, useState } from 'react';

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
import DiaryService from './services/DiaryService';

//  nockData : 가짜 데이터
const mockData = [
  {
      id : 0,   // id : db 고유값    //id값은 밑에서 올라오지 않는다. 
      date:new Date().getTime() -1,  // 어제날짜
      content : "mock1",
      emotionId : 2
  },

  {
    id : 1,
    date:new Date().getTime() -2,  // 2일 전
    content : "mock2",
    emotionId : 3
  },
  
  {
    id : 2,
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
function reducer (state, action) {     // 밑에 있는(90)  data(기존 배열에 있는 값)가 state 로 들어오게 됨 , action에는 밑에 있는(90) dispatch  안의 인자 (dispatch에서 선언한) 들이 들어온다
  switch (action.type) {
    case "INIT":
      return action.data;    // action.data : mock 데이터를 넣어놓음(94)
    case "CREATE":
      return [action.data, ...state];  /// 기존의 state : (67)의 state
    case "DELETE":
      //  state.filter(it) (state를 filter을 돌려서 action.targrtId !== it.id 을 새로운 배열에 담아 return
      //  it : map을 돌려서 끄집어낸 인자
      //  같은 것은 버리고 같지 않은 것은 새로운 배열에 담아서 리턴되어 state를 변경

      // it.id 필드의 자료형(number) , action.targrtId 필드의 자료형 (string) 이 다르기 때문에 맞추어줘야 한다.
      return state.filter( (it) => String(it.id) !== String(action.targetId) );
    case "UPDATE":
      return state.map((it)=> String(it.id)=== String(action.data.id) ? {...action.data} : it );    // string으로 맞추던지 Number로 맞추던지
     // 같으면 action(dispatch 넘어오는 값 (수정된 값))의 data 적용 , 같지 않으면 it를 던져줌
  }
}     


function App() {

  // 상태를 처리하는 변수
  // const [data , dispatch] = useReducer(reducer,[]);   // dispatch(함수)를 통해서 reducer를 호출함, return값으로 아래의 배열안에 mockdata가  data로 값이 들어옴

  const[data, setData] = useState([]);

  // usrRef Hook을 사용해서 고유한 값을 생성 : id필드에 적용
  const idRef = useRef(3);



  // useEffect 컴포넌트가 로드될 때 1번만 실행
  // 컴포넌트가 처름 로드될 때 dispatch를 호출해서 data에 mockData의 값을 할당
  useEffect( () => {      // 1번째 인자 : 함수 , 2번째 인자 : 
    
      
      axiosListData();
  }
    ,[]
    
  );

   // setData 에 값을 넣는 함수 
    const  axiosListData = () => {
    DiaryService.getAllDiary().then((res) => {
      console.log("get성공",res);
      setData(res.data);
    })}

    

  // 하위 컴포넌트에서 요청하는 이벤트 처리 : onCreate , onUpdate , onDelete
  // 하위 컴포넌트에서 값이 올라옴
  // date : yyyy-mm-ddd  --> TimeTemp 형식의 날자 형식으로 변환
  const onCreate = (date , content , emotionId) => {

    console.log("date : " + date) ; 
  
    
    const diary = {
      date:new Date(date).getTime(),
      content: content,
      emotionId: emotionId
  }

  console.log ("onCreate : " , diary ); 


  DiaryService.createDiary(diary).then((res) => {

  })
  DiaryService.getAllDiary().then((res)=>{
      console.log("data", res.data);
      setData(res.data)
  })

    // dispatch ({
    //     type : "CREATE",
    //     data : {    // 객체
    //       id : idRef.current++,
    //       date: new Date(date).getTime(),                  // date : yyyy-mm-ddd  --> TimeTemp 형식의 날자 형식으로 변환
    //       content : content,
    //       emotionId : emotionId,

    //     }

    // });

  }

  const onUpdate = (id, date, emotionId, content) => {

    const diary = {
      id: id,
      date:new Date(date).getTime(),
      content: content,
      emotionId: emotionId}

    DiaryService.updateDiary(diary).then((res) => {
      console.log(res)
  })

  console.log(`업데이트 날짜: ${date}`)
  console.log(`포맷 완료된 날짜: ${new Date(date).getTime()}`)

  DiaryService.getAllDiary().then((res)=>{
      console.log("data", res.data);
      setData(res.data)
  })
    // console.log(`App 컴포넌트 :업데이트 날짜 : ${date}`);
    // console.log(`포멧 완료된 날짜 : ${new Date(date).getTime()}`);

    // dispatch ({      //dispztch를 호출하면서 기존 배열에서 검색해서  안에 객체에서 id갑을 찾아서 수정해서 변경된 내용을 적용
    //   type : "UPDATE",
    //   data: {
    //     id : id,
    //     date : new Date(date).getTime(),     // yyyy-mm-dd형식인 것을 Db안에 저장해줄 때는 다시 TimesTemp 형식으로 넘겨주어야 한다. 
    //     emotionId : emotionId,
    //     content : content
    //   }
      
    // });

  }

  const onDelete = (targetId) => {

    DiaryService.deleteDiary(targetId).then((res) => {
      console.log("data", res)
  })

      //console.log(`하위에서 삭제 id : ${targetId}`);
      // id값을 input받아서 dispatch 호출
      // dispatch ({
      //   type : "DELETE",
 //     targetId : targetId : 풀어서 사용함
      //  
      
  }

  return (

// 2. context provider를 사용해서 상태를 처리할 하위 컴포넌트를 그룹핑
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{onCreate , onUpdate , onDelete}}>  {/* 하위 컴포넌트에서 값을 가지고 이벤트가 올라옴  */}
      
    



    <div className="App">
        <h1>다이어리 APP</h1>


    <Header/>
    <hr className='hrhr'/>
    <p/><p/><p/><p/><p/><p/><p/>
  
    {/* // 바뀌는 페이지 부분 */}
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/new' element={<New/>}></Route>
      <Route path='/diary/:id' element={<Diary/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>

      <Route path='/btntest' element={<ButtonTest/>}></Route>
      <Route path='/imgtest' element={<ImageTest/>}></Route>


    </Routes>

    <p/><p/><p/><p/><p/><p/><p/>
    <hr className='hrhr'/>
    <Footer/>


    </div>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

  );
  
}

export default App;
