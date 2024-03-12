import React from 'react';
import {useParams} from 'react-router-dom'

//http://localhost:3010/edit/id
//useParams : URL Path 로 넘어오는 변수의 값을 받는 Hook , react-route-dom v6 이상

function Edit(props) {

  //http://localhost:3010/edit/:id
  // Path 넘어오는 변수값을 gettering 해서 {id}로 넘겨주는게 useParams 이라는 Hook
  const {id} = useParams();  


  return (
    <div>
      <h1>🟣 수정페이지 (Edit) 🟣</h1>
      <p>환영합니다</p>


      <p>useParams로 넘어오는 변수 값을 출력 </p>
      <h1>{id}</h1>
    </div>
  );
}

export default Edit;

