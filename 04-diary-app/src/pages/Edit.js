import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Editor from '../components/Editor';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {DiaryDispatchContext , DiaryStateContext} from '../App'; 


function Edit(props) {

  //  ☆ edit/:id --> 파라미터의 id 값을 가져오기 

  // 구조 분해 할당 방식으로 가져오기
  const {id} = useParams();     // id  ( params의 id값을 뽑아올 때 )
  // 다른 방식으로 가져오기
  const params = useParams();   // params.id  ( params의 id값을 뽑아올 때 )
  // navigate 선언
  const navigate = useNavigate();

  // App.js 에서 context에서 DiaryStateContext로 부터 data 가져옴 --> 배열 [객체 , 객체 ,객체]
  const data = useContext(DiaryStateContext);

  // data 배열로부터  파라미터로 넘어오는 {id}값(15)이 들어간 일기를 저장하는 state 
  const [diary , setDiary] = useState();

  // useEffect를 사용해서 Edit 컴포넌트가 처음 렌더링 될 때 1번만 작동 , 의존성 배열의 state가 수정될 때 아래 함수가 작동 
  // data 배열의 id에 해당하는 읽기 정보를 끄집어내서 setDiary 를 수정
      // 의존성 배열 : id , data의 값이 수정될 때 함수가 렌더링
  useEffect (
    () => {
      // setDiary를 사용해서 diary상태를 변경 ,  diary : id 값에 해당하는 일기 
      // 앞 it : 배열안에 끄집어낸 객체 === 뒤 it : 파라미터로 끄집어낸 id (params(15))
      const matchDiary = data.find((it) => String(it.id) === String(id));   // find 의 끄집어낸 인자를 it로 설정
      
      // 위의 값이 같은 것만 matchDiary 에 넣어줌

      if (matchDiary) {    // data배열에서 해당 일기가 검색되었을 때 
        setDiary(matchDiary);  // matchDiary 값을 setter를 통해서 넣음
      } else {    // data 배열에서 값이 검색이 되지 않았을 때
      window.alert ("해당 일기가 존재하지 않습니다.")
      navigate('/',{replace:true});
      }
    
    }, [id ,data]   
  ); 



  // useContext 를 사용해서 하위 컴포넌트에서  props 연결 없이 바로 호출해서 사용함
  // App.js : Context 에서 onUpdate , onDelete이벤트를 가지고 옴
  const {onUpdate, onDelete} = useContext(DiaryDispatchContext);


  
  
  // 뒤로 가기 버튼 
  const goback = () => {
    navigate(-1);
  }

  // 삭제하기 클릭 : /edit/id
  // confirn : 확인을 선택하면 true가 return / 취소를 선택하면 false가 return
  const onClickDelete = () => {

    if (window.confirm(`일기 ${params.id}를 삭제하시겠습니까?`)) {
      // confirm 에서 확인 (true) 블락이 실행
      onDelete(id);
      // 삭제 이후 이동할 페이지
      navigate('/', {replace:true})
    }

  }

  const onSubmit = (data) => {
    // 수정한 내용을 처리하는 함수 
    // 구조 분해 할당을 통해서 나눠담는다.

    if (
          window.confirm(`수정하시겠습니까?" ${data.date} `)
    ){
        // confirm에서 확인을 클릭시 작동
        // 구조 분해 할당 , ES6 : 객체의 필드를 변수에 할당
        const{date , emotionId , content} = data;
        // onUpdate 이벤트에 구조분해 할당한 값을 props로 전달
        // 수정페이지이므로 /edit/:id , id값도 넘겨줘야 하마
        onUpdate (id ,date , emotionId, content);   // onUpdatedml dat는 yyyy-mm-dd형식으로
        //페이지 이동
        navigate('/',{replace:true});
    }
    


  }
  return (
    <div>
      <Header title ="일기 수정하기"
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={goback} />}
                rightChild={<Button text=" 삭제하기 "
                          type="negative" onClick={onClickDelete} />}
        />

      <Editor initData={diary} onSubmit={onSubmit} />
    </div>
  );
}

export default Edit;