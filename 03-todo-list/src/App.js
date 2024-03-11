import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
  // MOCK 데이터 생성 : 프로그램 테스트를 위해 임시로 생성한 데이터
  const mockData = [
    // 배열 안에 객체로 되어있음
    {
      id: 2,
      isDone: false,
      content: "react 공부하기",
      createDate: new Date().getDate()
    },
    {
      id: 1,
      isDone: true,
      content: "Java 공부하기",
      createDate: new Date().getDate()
    },
    {
      id: 0,
      isDone: false,
      content: "Spring 공부하기",
      createDate: new Date().getDate()
    },
  ];

  // Date().getDate() : UNIX의 시간을 생성 (1970.01.01)
  // Date().getTime() : 현재 시스템의 시간을 생성


  // 할 일 : 배열 [객체 , 객체 ,객체]
  const [todo, setTodo] = useState(mockData); // mockDate : 배열안에 객체가 들어가 있는 형식
  //    변수이름  변수를 변경할 setter

  // useRef : 렌더링 이휴에 임의의 새로운 고유한 값을 생성
  const idRef = useRef(3);

  const onCreate = (content) => {
    // 하위 컴포넌트로 이밴트 받아서 => onCreate 프롭스를 통해서 전송됨
    console.log("App 컴포넌트에 값이 잘 전송됨");
    console.log(content);

    // 하위에서 받은 content를 배열의 첫 번째 객체로 추가함
    const newItem = {
      id: idRef.current,
      content: content, // 객체의 필드명과 input으로  들어오는 변수명이 동일하면 축약해서 사용가능  [content : content  ---> content 로 축약 가능]
      isDone: false,
      createDate: new Date().getTime(),
    };

    // 배열에 추가함
    setTodo([newItem, ...todo]); // 기존 배열 todo는 그대로 있고 그 앞쪽에 newItem 추가 (...todo : 새로운 문법)
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    console.log("업데이트함수 호출성공");
    console.log(targetId);

    setTodo(
      todo.map((it) => 
        // it.id와 targetId가 같은 값을 찾아서 isDone의 필드의 값을 반대로 수정함
        // === 값과 타입이 모두 같을 때
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
        
      )
    );
  };
  
  // 배열의 객체의 id필드의 내용을 검색해서 삭제
  // it.id필드의 값이 targetId 필드의 내용과 같지 않은 것만 새로운 배열에 담는다.
  const onDelete = (targetId) => {
    console.log("삭제함수 호출성공");
    console.log(targetId);

    setTodo(
      todo.filter((it) => 
        it.id !== targetId
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor
        onCreate={onCreate} // 자식의 이벤트를 받는 props
      />

      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      {/* // 하위에서 onUpdate , onDelete 올라옴 */}
    </div>
  );
}

export default App;
