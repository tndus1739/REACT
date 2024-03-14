import React, { useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';

function New(props) {

  // useNavigate
  const navigate = useNavigate();

  // Contextdml Provider에 onCreate 를 연결 : useContext
  const {onCreate} = useContext(DiaryDispatchContext)

  const onsubmit = (data) => {                                 // data : onsubmit에서 올라오는 객체 (배열 X)
    console.log("글쓰기 호출됨");

    // 구조 분해 할당 : ES6(2015)에서 적용 , 객체의 필드의 값을 새로운 변수에 할당

    const {date , content , emotionId} = data ;  // (글쓴 날짜 , 내용 , Id값 )

    onCreate (date , content , emotionId);
      // 완료되면 해당 페이지로 이동
      navigate('/',{replace:true});



  }

  return (
    <div>
        <Header title ="새 일기 작성하기"
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={() => {navigate(-1)}} />}
        />

        <Editor onsubmit = {onsubmit}/>  
        {/* 글쓴 데이터 값을 담아서 Props로 전송 */}

    </div>
  );
}

export default New;