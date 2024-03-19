import React, { useEffect } from 'react';
import './Editor.css';
import { emotionList ,getFormattedDate } from '../utils';     // export default 가 아니기 때문에 { } 처리를 해주어야 한다. 
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


// 생성할 때도 수정할 때도 Editor

function Editor({initData , onSubmit}) {    //props선언    
  // onSubmit : 상위에 있는 컴포넌트과 연결이 되어야 한다. [상위 컴포넌트 : New 컴포넌트]
  // initData : 생성할 때는 사용하지 않고 수정할 때 사용한다. 



  // 글 쓴 전체 내용을 담는 state  <--  String , Number , boolean , Objsect : 객체  , 배열이 들어갈 수 있음
    const [state, setState] = useState({
      // 객체 타입으로 기본값 세팅
      date : getFormattedDate(new Date()),
      emotionId : 3 ,
      content : '',

    });

    // 수정 페이지 : initDate : 수정할 객체가 props를 통해서 넘어옴
    // Editor 컴포넌트가 호출 , initData 가 상태가 변경될 때 함수가 작동

    useEffect (
      () => {
        if(initData){    // initData :값이 존재할 때 , 수정페이지
                         // initDate 객체의 date 필드의 형식을 yyyy-mm-dd 형식으로 변환해주어야 한다.  
          setState({...initData,date:getFormattedDate(new Date (parseInt(initData.date)))});

        }
      }, [initData]

    );

    // 선택된 날짜 수정하기
    const handleChangeDate = (e) => {
      setState(     //setstate를 통해서 (13)의 setState를 수정
        {...state , date : e.target.value}     // yyyy-mm-dd 형식으로 들어옴  , 현재 선택된 value 값으로 수정
      );
    }


   // 취소하기 버튼에서 사용되는 useNavigate

    const navigate = useNavigate();

    // 선택한 이모티콘의 번호를 받아서 state 의 emotionId 필드의 값을 수정
    // key <= e
    const handleChangeEmotion = (e) => {
    
      setState(     
        {...state,  emotionId: e}   
    // 기존 state   
      );
    }

    // textarea 의 값이 변경되면 작동되는 함수
    const handleChangeContent = (e) => {
        setState(     
          {...state, content : e.target.value}     
        );
    }
    
    // 기존의 state의 값을 호출하는 컴포넌트로 전송
    const handleSubmit = () => {
        onSubmit(state)
    }

    

  return (
    <div className='Editor'>
      <h4> 오늘의 날짜</h4>
      <div className='input_wrapper'>
        <input type="date" value={state.date}   // yyyy-mm-dd 형식으로 전달해 주어야 함
        onChange={handleChangeDate}
        
        />    
        {/* yyyy-mm-dd 형식이어야 한다. (m이 1개 이면 안됨) */}
      </div>

      {/* 이모티지를 출력하는 블락 */}
      <div className='editor_section'>
          <h4>오늘의 감정</h4>
          <div className='input_wrapper emotion_list_wrapper'>
            {/* 자바 블럭이 아니라서 ; (세미콜론) 사용불가 */}

            {
              emotionList.map((it) => (   // 함수 X  괄호 넣어도 되고 안넣어도 됨
                <EmotionItem key={it.id} {...it} 
                onClick={handleChangeEmotion}
                isSelected={state.emotionId === it.id}
                />
                // 리엑트에서는 map을 돌릴 때  반드시 key값 필요
                )
              )
            }
          </div>
      </div>
      {/* textarea글을 쓰는 블락 */}
      
      <div className='editor_section'>
        <h4>오늘의 일기</h4>
        <div className='input_wrapper'>
          <textarea 
              placeholder='오늘은 어땠나요?'
              value={state.content}
              onChange={handleChangeContent}
          />
        </div>
      </div>
      {/* 버튼블락 : 취소하기 , 작성완료 */}
      <div className='editor_section bottom_section'>
        <Button text ={"취소하기"} type = "negative" onClick = {()=> {navigate('/', {replace:true})}}/>         
        <Button text ={"작성완료"} type = "positive" onClick={handleSubmit}/> 
        {/* {replace:true} : 뒤로 가지 방지 기능 */}
      </div>
    </div>
  );
}

export default Editor;