import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function Diary(props) {
  return (
    <div>
      <Header title ="2024.03.13 상세내용"
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={() => {console.log("뒤로가기 클릭")}} />}
                rightChild={<Button text=" 수정하기 "
                          type="negative" onClick={() => {console.log("수정하기 클릭")}} />}
        />
    </div>
  );
}

export default Diary;