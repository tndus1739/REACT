import React from 'react';

function Controller({handleSetCount}) {      // 버튼에서 발생되는 props를 위로 올려주는 props
  return (
    <div>

      <button onClick={ () => {handleSetCount(-1)}}> -1 </button>
      <button onClick={ () => {handleSetCount(-10)}}> -10 </button>
      <button onClick={ () => {handleSetCount(-100)}}> -100 </button>
      <button onClick={ () => {handleSetCount(100)}}> +100 </button>
      <button onClick={ () => {handleSetCount(10)}}> +10 </button>
      <button onClick={ () => {handleSetCount(1)}}> +1 </button>
    </div>
  );
}

export default Controller;