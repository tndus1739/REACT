import React from 'react';

function Lab04() {

const fruitsName = ['오렌지','파인애플','자몽'];
const fruits = fruitsName.map((fruit) =>{
  return <li>{fruit}</li>
});
  return (
    <div>
      <h1> Lab04 - map() 메소드를 사용해서 처리 (배열안에 있는 값을 1개씩 끄집어 냄)</h1>
      <ul>
        {fruits}
      </ul>
    </div>
  );
}

export default Lab04;