
import './App.css';

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

function App() {
  return (
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


    </Routes>

    <p/><p/><p/><p/><p/><p/><p/>
    <hr/>
    <Footer/>




    </div>
  );
}

export default App;
