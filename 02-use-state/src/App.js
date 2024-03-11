
import './App.css';
import { useState } from 'react';


function App() {
  
  // JavaScript 코드 블락
  let name = 'World';

  // useState Hook : 상태가 변경이 되면 자동으로 랜더링 (상태 : 값 )
    // import가 필요함 -> import { useState } from 'react';

  // useState 선언블락
  // number변수는 버튼을 클릭시 random함수에서 임의의 정수값을 저장하는 변수
  // numberStyle 변수는 number 변수의 값이 양수일 때는 skyblue로 출력 , 음수일 때는 pink로 출력
  const [number, setNumber] = useState(0);   // 변수의 초기값 설정 (초기값으로 0을 담음)  // setter(serNumber)를 통해서 number 수정가능 직접 수정은 X
 // setNumber를 통해서 수정된 값이 number변수에 할당 -> 변경된 값이 뷰페이지게 자동으로 렌더링

  // useState 사용하려면 import해줘야 한다. 


  // setter를 통해서 값을 수정 하면 자동으로 랜더링


  const [numberStyle, setNumberStyle] = useState({color:"skyblue"});  // 객체를 담음

// {color:"skyblue"} -> 객체   , 초기값을 numberstyle에 언흥ㅁ



    /*
    ★ Javascrip에서 함수를 생성하는 3가지 방법 : ES6 에서 새롭게 추가된 화살표 함수

    1. 기본 함수 선언
      function clickEventHandler() {
        // 실행코드 작성
      }
    
    2. 객체형식으로 선언하는 방법
      const clickEventHandler = function() {
        // 실행코드 작성
      }

    3. 화살표 (Arrow) 함수
      const clickEventHandler = () => {
        // 실행코드 작성
      }
      */
  
      // 버튼을 클릭시 작동되는 함수
      const clickEventHandler = () => {
        
        console.log ("함수호출성공");

        // 랜덤 함수를 사용해서 임의의 값을 생성

        let num = Math.random() * 100 ;

        console.log(num);
        
        // 소수점 이하는 절삭 , 정수만 출력
        num = Math.floor(num) ;
        console.log(num);

        // 생성된 값이 양수이면 하늘색으로 스타일링 적용
        
        setNumberStyle({color:'skyblue'});

        // 음수일 때 생성된 값이 음수이면 분홍색으로 스타일링 적용
        // 1이면 True  : 0.5 이상일 때
        // 0이면 False : 0.5 미만일 때
        if ( Math.floor(Math.random() *2)) {
            
          num = -num
          setNumberStyle({color:'pink'});
          console.log (num);

        }

        setNumber(num);

      }


    return (

    // 주석 적용됨
    <div className="App"   //주석 적용됨
    >
      <h1> Hello , {name}</h1>

      {/* // 스타일 적용할 때는 중괄호 2개  */}
      {/* {color:"pink"} 값이 {numberStyle}에 담김 */}
      

      <hr/>

      <p style = {numberStyle}> Number : {number} </p>  

      {/* // onClick 대문자 주의 */}
      <button onClick = {clickEventHandler}> 클릭하세요 </button>    
      <hr/>

      <div style ={{color: 'pink', padding:20}}> jsx 블락에서 인라인 스타일 적용</div>  


    </div>
  );
}

export default App;
