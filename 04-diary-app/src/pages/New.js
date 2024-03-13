import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';


function New(props) {
  return (
    <div>
        <Header title ="새 일기 작성하기"
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={() => {console.log("뒤로가기 클릭")}} />}
        />
    </div>
  );
}

export default New;