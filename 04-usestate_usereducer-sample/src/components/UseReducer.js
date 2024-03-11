import React, { useReducer } from 'react';

const reducer = (count1, action) =>{
  switch (action.type) {
    case 1 :
      return count1 + 1 ;
    case 10 :
      return count1 + 10 ;
    case 100 :
      return count1 + 100 ;
    case 1000 :
      return count1 + 1000 ;
    default:
      return count1;
    }

  }


function UseReducer(props) {

  // useReducer() Hook :
      // useState()를 대체할 수 있는 Hook , 상태가 수정이 되면 자동으로 렌더링
      // 컴포넌트 내부의 로직을 컴포넌트 외부로 분리시켜 줄 수 있다. 
      // 컴포넌트 코드의 최적화를 이루게 해준다.
      // 관리해야할 state가 1개 이상 복수 일 때
      // 컴포넌트 : 클래스형 컴포넌트(구문이 복잡하다.) , 함수형 컴포넌트 (구문이 쉽다.)
      // Hook : 클래스형 컴포넌트의 지원하는 기능을 함수형 컴포넌트에서 구현할 수 있도록 만들어 놓은 기능
          // use_ 

      // useReducer() 선언하기 : dispatch (=setcount) : count를 수정함
      const [count1, dispatch] = useReducer(reducer, 0);   // dispatch를 호출하면 reducer함수를 호출하게 된다

  return (
    <div>
    
      
      <div><h1>{count1}</h1></div>
      <button onClick= {() => dispatch({type:1})}> 더하기 1</button>   {/* dispatch 호출 */}
      <button onClick= {() => dispatch({type:10})}> 더하기 10</button>
      <button onClick= {() => dispatch({type:100})}> 더하기 100</button>
      <button onClick= {() => dispatch({type:1000})}> 더하기 1000</button>
    </div>
  );
}

export default UseReducer;