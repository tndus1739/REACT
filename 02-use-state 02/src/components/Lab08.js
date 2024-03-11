import React from 'react';
import { useState } from 'react';

function Lab08(props) {
  
  // Mock 데이터 : 가짜 데이터 , 프로그래밍에서 기본값을 출ㄹ력
  const [food , setFood] = useState(['알밥', '피자', '파스타']);

  //  상태가 변경되면 자동으로 랜더링되도록 useState();
  const [inputValue , setInputValue] = useState(""); 

  // 함수생성
  const onChangehandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  } 

  // 버튼 클릭시 작동함수
  const onClickhandler = (e) => {
    // input 박스의 값을 setFood 를 사용해서 배열에 값을 추가하면 자동으로 랜더링 됨 
    // 기존배열에서 마지막에 값을 더 추가할 때 사용되는 새로운 문법
    // ES6에서 새롭게 추가된 문법 : [...food, 추가할 값]
    setFood([...food, inputValue]);
    // input 박스의 값을 초기화
    setInputValue("");
  }
  return (
    <div>
      <h1> Lab08 - 버튼을 사용해서  input을 넣은 값을 태그를 생성해서 추가  </h1>
      
      <input value = {inputValue} onChange={onChangehandler}/>     {/* {inputValue} :  수정된 값이 들어오는 것 */}
      <button onClick={onClickhandler}>추가</button>

      <ul>
          {
          food.map((food,index) => {
            return <li key={index}> {food}</li>

          })
          
          }


      </ul>

    </div>
  );
}

export default Lab08;