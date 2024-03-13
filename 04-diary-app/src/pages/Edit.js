import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function Edit(props) {
  return (
    <div>
      <Header title ="일기 수정하기"
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={() => {console.log("뒤로가기 클릭")}} />}
                rightChild={<Button text=" 삭제하기 "
                          type="negative" onClick={() => {console.log("삭제하기 클릭")}} />}
        />
    </div>
  );
}

export default Edit;