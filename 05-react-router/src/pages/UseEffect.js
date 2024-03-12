import React, { useState } from 'react';
import { useEffect } from 'react';

/*
    ★★ useEffect Hook : 의존성 배열 (Depandency Array) 이 변경될 때 함수가 작동이 됨  (배열 안의 값이 변경될 때 함수가 작동이 됨)
      - useEffect (Function , [deps]) (첫번째 인자 :  함수 , 두번째 인자 : 의존성배열에 따라 아래 3가지 방법)

      - 작동상태 : 3가지
      1. deps(디펜던시)의 인자 값이 오지 않는 경우 : 컴포넌트가 생성 (Mount) 될 때 호출
          // 랜더링 될 때 마다 작동됨
          // 호출할 때(Mount) , Update (수정)될 때마다

          - useEffect (Function)

      2. deps의 인자의 값이 [] 적용되었을 경우 : 컴포넌트가 처음 랜더링 시점에 한 번만 작동이 됨 , 이후에는 작동이 안됨
          - useEffect (Function , [])

      3. deps의 인자의 값이 [count , name] 인 경우 : count , name의 값이 변경될 때 function이 작동됨
          - useEffect (Function, [count, name])

*/


function UseEffect(props) {

  // 1. useEffect 선언 : 컴포넌트를 호출할 때마다 매번 작동 (deps 옵션이 생략된 경우) /  뒤에 배열 생략
  useEffect(
    // 실행할 함수 
    () => {console.log('컴포넌트 생성(Mount)시 작동됨 - 렌더링 될 때 마다 작동됨')});

  // 2. useEffect 선언 : 컴포넌트를 호출할 때 처음 1번만 작동됨 (deps 옵션 : [] 경우)
  useEffect(
    // 실행할 함수 
    () => {console.log('한 번만 실행됨')}, []);   // 빈배열을 넣으면 한 번만 작동이 된다.

  // 3. useEffect 선언 : deps 옵션에 [count , name] 값이 적용된 경우 , count , name 변수의 값이 수정되어 값이 변경될 때  function이 작동됨
      // function이 작동됨 , Update

      const [count, setCount] = useState(0);  // setter를 통해서 수정하도록 함
      const [name, setName] = useState('');

  useEffect(
    // 실행할 함수 
    () => {console.log('count, name 상태가  변경될 때 작동됨')}, [count, name]);


    const countChange = () => {

      setCount(count+1);

    }

    const nameChange = () => {
        setName("ABCDEFG" + (count+1));
    }

  return (
    <div>
      <h1> useEffect 예제 : 작동 방법 3가지</h1>
      <hr/>
      <br/>
      <h1> 카운트 값 :{count}</h1>
      <h1> 이름 값 :{name}</h1>
      <hr/>
      <button onClick={countChange}>count값 수정</button>
      <button onClick={nameChange}>name값 수정</button>

    </div>
  );
}

export default UseEffect;