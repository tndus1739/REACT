import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css';


function TodoList({ todo, onUpdate, onDelete }) {
  // todo : APP 컴포넌트에서 내려오는 객체를 담은 배열

  // 검색 상태 변화
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  
  // 검색어를 처리하는 함수 : todo.filter() --> 배열의 값을 필터해서 새로운 배열에 저장
  const getSearchResult = () => {

      return search ==="" ?          // 삼항연산자 (조건) , 검색어가 비어있을 때
          todo :                     // 참
          todo.filter((it) =>      // 거짓
                it.content.toLowerCase().includes(search.toLowerCase())   // 검색어가 있을 때 그 단어가 포함된 것만 던져줌  // 소문자로 변경해서 찾음

      );



  }


  return (
    <div className="TodoList">
      <h4> ✨Todo List </h4>

      {/* ★ 검색기능 추가 */}
      <input
          value={search}
          onChange={onChangeSearch}
          className='searchbar'
          placeholder='검색어를 입력하세요'
      
      />

      <div className='list_wrapper'>
        {/* {
        todo.map((it) => {
          /// map을 이용해 배열안에 있는 값을 끄집어 낸다  // 검색어기능이 없을 때 사용

          return (
            <TodoItem
              key={it.id}
              id={it.id}
              content={it.content}
              isDone={it.isDone}
              createDate={it.createDate}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })
        } */}

        {/* 검색어를 사용해서 처리함  */}

        {
          getSearchResult().map((it) => 
  
              <TodoItem
                key={it.id}
                id={it.id}
                content={it.content}
                isDone={it.isDone}
                onUpdate={onUpdate} 
                onDelete={onDelete}
                createDate={it.createDate}
              />
          
            )

        }
      </div>
    </div>
  );
}

// 이벤트는 하위에서 부모 프롭스를 통해서 올라가고
// 상태값은 부모를 통해 자식으로 내려온다

export default TodoList;
