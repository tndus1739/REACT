import React from "react";

function Lab02() {
  // 택그를 배열에 넣고 배열을 출력

  const fruits = [<li>Apple</li>, <li> Banana </li>, <li>Orange</li>];
  return (
    <div>
      <h1> Lab02 - 배열에 엘리멘트를 적용해서 배열 출력</h1>

      <ul>{fruits}</ul>
    </div>
  );
}

export default Lab02;
