import React from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';



function DiaryList({data}) {

  // useNavigate : 함수, 이벤트 특정 요청 ==> 라우터 요청에대한 컴포넌트 출력 
  const navigate = useNavigate();

  return (
    <div className='DiaryList'>
      
      {/* select box , 새글쓰기 버튼 */}
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select >
            <option value="newer">최신순</option>
            <option value="older">오래된순</option>
          </select>
        </div>
        
      <div className='right_col'>
          <Button text ={"새글쓰기"} type={"positive"} onClick={()=> {navigate('/new')}}/>
      </div>
      </div>
      {/* DiaryItem을 처리하는 블락 */}
      <div className='list_wrapper'>
        {
            data.map((it)=> (
              <DiaryItem key={it.id} {...it}/>    // map으로 돌릴 때는 key 값을 넣어주어야 오류가 안뜸

              )

            )

        }


      </div>
    </div>
  );
}

export default DiaryList;