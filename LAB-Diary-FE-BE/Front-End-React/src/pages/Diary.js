import React, { useEffect, useState , useContext } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import Viewer from '../components/Viewer';

function Diary(props) {

  // 글 상세 내용 출력

  // /diary/변수값 : 라우터에서 : /diary/:id 
  // useParams Hook에서 path Variable에서 넘어오는 변수 값을 불러 올 수 있음

  const {id} = useParams();
  
  // useNavigate Hook을 사용해서  뒤로이동 , 앞으로 이동
  //     navigate (-1) : 이전페이지로 이동
  //     navigate (-2) : 이전이전페이지로 이동
  //     navigate (+1) : 다음페이지로 이동

  //  context의 상태값을 가지고 와서 id 필드의 내용의 객체를 추출
  // context의  Provider에서 내려보내준 상태값을 가지고 옴 : data : [{},{},{}]

  const data = useContext(DiaryStateContext);

  // useState : id변수의 값으로 배열에서 검색된 객체를 저장

  const [diary , setDiary] = useState();       // diary : 검색해서 끄집어낸 객체

  // id변수를 가지고 검색된 내용(객체)을 setDiary에 주입
  // 함수
  useEffect ( () => {  // 의존성 배열: [id , data] 값이 수정되면 함수가 작동됨

      // 객체 내부의 값을 비교할 때 같은 type으로 비교 ( type을 맞춰줘야 한다)
        const matchDiary = data.find( (it) => String(it.id) === String(id)     // it: 배열 안에 있는 객체가 끄집어져서 나온것
                                                                               // 노란색 id : navigate에서 가져온 파라미터에서 넘어온 id (쿼리로 넘어오는 것은 String 타입)

        );

        // matchDiary 의 값이 존재 , 존재하지 않을 수 있음
        if (!matchDiary) {
          // matchDiary의 값이 존재하지 않을 때 작동
          alert("존재하지 않는 글입니다. HOME으로 이동합니다 ★");
          navigate("/" , {replace: true});
        } else {
          // matchDiary의 값이 존재할 때 작동 , setdiary를 사용해서 diary에 값을 주입
          setDiary(matchDiary);
        }



  }
    , [id , data]
  );





  const navigate = useNavigate();
  
  // 주의 : diary 값이 주입된 이후에 작동
  if (!diary) {
        return <div> 현재 값이 로딩 중 입니다.</div>
  } else {
    // diary 값이 주입된 상태
  
  const {content , emotionId , date} = diary;   //  diary 객체안에 필드들)

  //  return안 (jsx블락)에서는 if문을 못 써서 삼항연산자를 사용

  return (
    <div>
      <Header title ={`${id}글의 상세내용`}
                leftChild={<Button text=" < 뒤로가기 "
                          type="positive" onClick={() => {navigate(-1)}} />}
                rightChild={<Button text=" 수정하기 "
                          type="negative" onClick={() => {navigate(`/edit/${id}`)}} />}
        />

      {/* <div>{diary.content}</div>
      <div>{content}</div>
      <div>(emotionId)</div>
      <div>{date}</div> */}


        <Viewer {...diary}/>
    </div>
  );

}
}

export default Diary;