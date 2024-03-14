import React from 'react';
import './EmotionItem.css';

// 새글쓰기에서 emotionList의 배열의 객체 5개를 출력
function EmotionItem({id, name , img , onClick, isSelected}) {     // input 받을 props선택


    const handleonClick = () => {       // 위에 있는 onClick과 착각 nope   [onClick : props / handleonClick : event]

          onClick(id);
    }


  return (
    <div
        className={["EmotionItem", isSelected ? `EmotionItem_on_${id}`  : 'EmotionItem_off'].join(" ")}

        onClick={handleonClick}

    >
      
        <img alt={`emotion${id}`} src = {img} />
        <span>{name}</span>         {/* name : 좋음 , 보통 .. */}
    
    
    </div>
  );
}

// 새글쓰기에서 
export default EmotionItem;