import React from 'react';
import { useState } from 'react';

function Lab07(props) {

  // useSrate Hook : 상태값이 변경될 대 자동으로 랜더링
    // useState 에서 사용하는 변수 : String , number, boolean, Object ,배열 ...
  const [inputValue, setInputValue] = useState("");

  // input 박스의 값이 수정되면 호출하는 함수
  const onChangehandler = (e) => {     // e : 수정된 값을 받는 변수
    console.log ("함수호출성공")
    setInputValue(e.target.value);
    console.log(e.target.value);

  }

  return (
    <div>
      <h1> Lab07 - JSX에서 입력폼을 만들고 , 사용자가 입력한 값을 콘솔에 출력, 폼박스에 출력</h1>
      <input value ={inputValue} onChange={onChangehandler}/>
    </div>
  );
}

export default Lab07;