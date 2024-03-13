import React from 'react';
import './Button.css';


// 전체 페이지에서 사용하는 버튼 컴포넌트
// text

function Button({text, type, onClick}) {

  // type : positive , negative , default
  const btnType = ["positive" , "negative"].includes(type) ? type : "default";
  // type으로 들어오는 값이 배열안에 있으면 true 배열에 없으면 default


// 백틱 `` : 연결연산자 없이 문자열 내부에 변수를 출력 : `오늘의 날씨는 ${today}습니다.`
  return (
    <button  

        //btnType에 값이 3가지가 들어올 수 있다. ["positive" , "negative" , "default"]
        className={["Button",`Button_${btnType}`].join(" ")}  // join 사용 : "Button Button_default"
        onClick={onClick}
    >                                                                                                              
      {text}
    </button>
  );

// 컴포넌트의 Props의 값이 없을 때 기본값을 넣도록 함
Button.defaultProps ={
  type : "default",
}


}

export default Button;