import React from 'react';

function Lab05() {

  const fruitsName = ['체리','딸기','망고'];

    // 배열 안에 있는 것을 끄집어내면서 동시에 고유번호를 만들어냄
  const fruits = fruitsName.map( (fruit, index) => {  
    return <li key = {index}> {fruit} </li>

  }

  );

  return (
    <div>
        <h1> Lab05 - map()를 사용해서 출력 : 고유한 키를 생성하면서 출력</h1>
        <ul>
        {fruits}
      </ul>
    </div>
  );
}

export default Lab05;