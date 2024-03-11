  import React from 'react';
  import './TodoItem.css'

  function TodoItem({id, content , isDone, createDate, onUpdate , onDelete}) {

  // onUpdate : TodoITem에서 발생되는 이벤트를 , 체크박스를 선택 , 해제

  const onClickUpdate = () => {

    onUpdate(id);  // 그 객체의 고유한 id를 가지고 onUpdate하고 onDelete를 한다.
  }

  // ondelete : 버튼에서 삭제를 클릭시 삭제

  const onClickDelete = () => {
    onDelete(id);
  }



  return (
    <div className="TodoItem">
        <div className="checkbox_col">
          <input type="checkbox" onChange ={onClickUpdate} checked={isDone}/>
        </div>

        <div className="title_col">
          {content}
        </div>

        <div className="date_col">
          {new Date(createDate).toLocaleDateString()}
        </div>

        <div className="btn_col">
          <button onClick={onClickDelete}>삭제</button>
        </div>


    </div>
  );
  }
  
  export default TodoItem;