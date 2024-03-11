// rsf 입력하면 컴포넌트 자동으로 생성

import React from 'react';

// 컴포넌트로 값을 전달 : props
// "poster_path"
// "title"
// "vote_average"

//props.title, props.poster_path, props.vote_average 이렇게 처리해도 된다
function Movie({title, poster_path, vote_average}) {
  
  //영화 정보를 제공해주는 사이트 URL
  const IMG_BASE_URL = "https://image.tmdb.org/t//p/w1280/";
  
  return (   // return 뒤의 소괄호는 엔터 치지 말기 (엔터치면 비활성화가 되어버림)
    <div  className='movie-container'> 
      
          <img src = {IMG_BASE_URL + poster_path} alt = '영화포스터'></img>
          <div className='movie-info'>

            <h4>{title}</h4>
            <span>{vote_average}</span>

          </div>

    </div>
  );
}

export default Movie;    // 반드시 export 해줘야함 