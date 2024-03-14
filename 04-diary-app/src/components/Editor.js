import React from 'react';
import './Editor.css';
import { emotionList } from '../utils';
import EmotionItem from './EmotionItem';

function Editor({initData , onSubmit}) {    //props선언

    const handleChangeEmotion = () => {
    
      console.log('이벤트 전송 잘 됨 ');
    }

  return (
    <div className='Editor'>
      <h4> 오늘의 날짜</h4>
      <div className='input_wrapper'>
        <input type="date" />
      </div>

      {/* 이모티지를 출력하는 블락 */}
      <div className='editor_section'>
          <h4>오늘의 감정</h4>
          <div className='input_wrapper emotion_list_wrapper'>
            {/* 자바 블럭이 아니라서 ; (세미콜론) 사용불가 */}

            {
              emotionList.map((it) => (
                <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion}
                isSelected={true}
                />
                // 리엑트에서는 map을 돌릴 때  반드시 key값 필요
              )

              )
            }
            
            
          </div>
      </div>
      <div className='editor_section'></div>
      <div className='editor_section bottom_section'></div>
    </div>
  );
}

export default Editor;