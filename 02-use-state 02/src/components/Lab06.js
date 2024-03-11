import React from 'react';

function Lab06() {

  const fruitsName = ['샤인머스켓','복숭아','망고스틴'];

// 배열에 있는 값을 출력할 때 key 값 필요


  return (
    <div>
        <h1>Lab06 - jsx 블락에서 바로 맵으로 처리해서 출력함 </h1>

        <ul>
             {/* // 배열 */}
            {
            fruitsName.map ((fruit, index) => {
              return <li key = {index} > {fruit}</li>
            }

            )
            }   

        </ul>

    </div>
  );
}

export default Lab06;