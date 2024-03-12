import React from 'react';
import { useSearchParams } from 'react-router-dom';

// http://localhost:3010/edit2?id=200&mode=abc
// Query String : URl ? 뒤에 변수=값&변수=값&변수=값 ...  : useSearchParams
function Edit2(props) {

  // useSearchParams : ? 뒤에 넘어오는 모든 변수의 값을 처리하는 Hook

  const [searchParams, setSearchParams] = useSearchParams(); 
  // useSearchParams가 ?뒤에 오는 모든 변수값을 받아서 searchParams에 넣어준다

  // serchParams 에 저장된 닶을 끄집어 내서 새로운 변수에 할당
  const id = searchParams.get('id');   // 200이 담김
  const mode = searchParams.get('mode');   // abc가 담김

  return (
    <div>
      <h1> Edit2 : Query String을 처리하는 컴포넌트 </h1>
      <p> 💖🧡💛💚💙💜🤍 </p>

      <h1> Query String으로 넘어오는 id : {id}</h1>
      <h1> Query String으로 넘어오는 mode : {mode}</h1>

      <h1> Query String으로 넘어오는 전체 출력 : {searchParams}</h1>

    </div>
  );
}

export default Edit2;