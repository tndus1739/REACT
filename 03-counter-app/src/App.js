
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState } from 'react';

// React 의 가장 큰 문제점 : 상태값 전송ㅐ
// ★★ 상태값 전송을 할 수 있는 유일한 방법 : 부모 -> 자식    (주의 : 자식 -> 부모 X , 형제끼리 X)
// React에서 상태값 잔송은 부모 컴포넌트에서 자식 컴폰전트로  props 를 사용해서 전송됨

// props : 컴포넌트 사이에 값을 전달해 줌 , 반드시 부모에서 자식으로만 값을 내려보내줄 수 있음
  // React 에서 대규모 사이트 개발시 , 컴포넌트  안에 컴포넌트 또 컴포넌트 안에 컴포넌트 ..
  // - 컴포넌트 사이의 상태값을 효율적으로 전송하기 위한 솔루션
  //   - 리덕스 , 몹앱스 , contextAPI 를 사용해서 쉽게 전송할 수 있음

  // 부모 컴포넌트 : 변경된 값(상태)을 자식에서 props를 사용해서 전송시킬 수 있다. 


function App() {

// useState : App 컴포넌트에서 생성 , 변경된 상태의 값은 props를 사용해서 부모 -> 자식으로 전송
  const [count, setCount] = useState(0);

  const name ='ooo';
  const age = 100;

  // 상태 값 : 부모 -> 자식  ----> props를 통해서 이동
  // 이벤트 : 자식 -> 부모 ----> props를 통해서 이동  ---> Controller 발생
  // props를 통해 호출된 함수를 코딩

  // 기준의 count에서 value로 인풋 받는 값을 더해서 setCount 에 수정
  const handleSetCount = (value) => {
    setCount(count + value);
    
  }




  return (
    <div className="App">
      <h1> MY COUNT APP</h1>
      <hr/>
      <section>
      <Viewer count={count}    // tkdxorkqt : 부모(App)  ---> 자식(Viewer)
              name = {name}
              age= {age}
      
      />

      

      </section>
      
      <section>
      <Controller  
      /* 자식 -> 부모  : 이벤트를 처리하는 props */
      /* //handleSetCount : 자식 컴포넌트의 이벤트를 담는 props   <--- Controller에서 */
      handleSetCount = {handleSetCount}   
      />

    
    



      </section>
    </div>
  );
}



export default App;
