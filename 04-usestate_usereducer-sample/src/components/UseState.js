import React from 'react';
import { useState } from 'react';

function UseState(props) {

  //useState() : 상태(=데이터)가 변경되면 자동으로 렌더링됨
    // 상태값은 pros를 사용해서 부모 컴포넌트 -> 자식 컴포넌트로 렌더링됨
    // 여러 이벤트에 대한 함수를 매번 생성해야 한다. --> 코드가 지저분햊릴

  // useStat 선언
  const [count, setCount] = useState(0);

  // 각 각의 이벤트에 대해서 함수 호출 후 기존의 count에 값을 수정 후 setcount에 값을 넣어준다.
  const add1 = () => {
    setCount(count + 1);
  }
  const add10 = () => {
    setCount(count + 10);
  }
  const add100 = () => {
    setCount(count + 100);
  }
  const add1000 = () => {
    setCount(count + 1000);
  }

  return (
    <div>
      <div><h1>{count}</h1></div>
      <button onClick= {add1}> 더하기 1</button>
      <button onClick= {add10}> 더하기 10</button>
      <button onClick= {add100}> 더하기 100</button>
      <button onClick= {add1000}> 더하기 1000</button>
    </div>
  );
}

export default UseState;