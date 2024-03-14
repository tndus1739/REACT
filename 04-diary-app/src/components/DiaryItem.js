import React from 'react';
import './DiaryItem.css';
import { getEmotionImgById } from '../utils';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function DiaryItem({id , emotionId , content , date}) {

// MPA 에서 페이지 이동 : <a href="이동할 페이지.html"> 이동  </a>
//                       window.location.href ("sub.html")  : 함수 , 이벤트                        
// SPA 에서 페이지 이동 : <Link to = '/home'> 이동 </Link>
//                       라우팅 구성이 되어 있어야 한다.  :  /home (요청) --> <Home/> (컴포넌트)
//                       useNavigate : ("/home")

// useNavigate Hook 선언
const negative = useNavigate();

// diary 상세정보로 이동
const onDetail = () => {

  negative(`/diary/${id}`);
}

// diart 수정 정보로 이동 , useNavigate Hook (Rouer에 있음)을 사용해서 이동

  const goEdit = () => {
    negative(`/edit/${id}`);

  }




  return (
    <div className='DiaryItem'>
      <div onClick={onDetail}  className= {["img_section",`img_section_${emotionId}`].join(" ")}>
        <img src = {getEmotionImgById(emotionId)} alt={`emotion${emotionId}`}/>
      </div>

      {/* onClick 안에 함수를 바로 넣어줘도 됨 */}
      <div onClick={onDetail} className='info_section'>
          <div className='date_wrapper'>
            {new Date(parseInt(date)).toLocaleDateString()}   
             {/* toLocaleString() : 초까지 출력 */}
             {/* toLocaleDateString() : 날짜까지만 출력 */}
          </div>
          <div className='content_wrapper'>
            {content.slice(0,25)}   
            {/* .slice(0,25) : content의 길이가 기니까 0~25로 잘라서 보여줘 */}
          </div>
      </div>
      <div className='button_section'>
          <Button text={"수정하기"} type={"default"} onClick={ goEdit}/>
      </div>
    </div>
  );
}

export default DiaryItem;