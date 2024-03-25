import React , {useEffect, useState}from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';



function DiaryList({data}) {

  // data : 월별로 필터된 일기객체가 저장된 배열 , 날짲별로 정렬되지 않는 배열 [{일기1}, {일기2}, {일기3}]

  // useNavigate : 함수, 이벤트 특정 요청 ==> 라우터 요청에대한 컴포넌트 출력 
  const navigate = useNavigate();

  // Select의 Option의 Value , name 을 저장하는 배열
  const sortOptionList = [
    {value : "latest" , name : "최신순"},
    {value : "oldest" , name : "오래된순"}
  ];

  // 정렬타입을 저장하는 state
  const [sortType, setSortType] = useState("lastest");
  // 정렬 타입에 따라서 객체를 정렬해서 배열에 저장 [{일기1}, {일기2}, {일기3}]
  const [sortData, setSortData] = useState([]);

  // useEffect : sortType에 따라서 sortData를 수정하는 Hook , state의 값이 변경된 이후의 다른 작업을 자동으로 처리  
  //          DiaryList 처음 랜더링 될때 ,  의존성 배열의 값이 수정될 때 [data, sortType]

    useEffect(
        () => {
          // 인풋받은 객체의 날짜를 비교해서 리턴
          const compare = ( a , b) => {
              if (sortType === "latest"){  // 최신순으로 정렬해서 리턴
                  return Number(b.date) - Number(a.date);


              } else {  // 오래된 순으로 정렬해서 리턴
                  return Number(a.date) - Number(b.date);

              };

          }


          // compare 함수에 인자로 값을 정렬하기 위해 , 원본일기를 저장라는 배열의 값을 JSON 형식으로 저장 후 자바의 객체로 변환
              // JSON.stringify (객체) : 객체를 JSON 형식으로 변환하는 메소드 <== 직렬화 : RAM(객체)를 네트워크(JSON)로 내보낼 수 있음
              // JSON.parse (JSON파일) : JSON파일을 JavaScript 객체로 변환 , RAM에서 Object에 정의된 여러 메소드를 사용함   : 역직렬화 

          const copyList = JSON.parse(JSON.stringify(data));
          
          // copyList에는 정렬된 배열의 객체가 정렬되어서 들어감
          copyList.sort(compare);

          // setSortData에 copyList : 정렬된 배열을 넣는다
          setSortData(copyList);

        }, [data , sortType]

    );



  const onChangeSortType =  (e) => {
      console.log (e.target.value);
      setSortType(e.target.value);
  } 


  return (
    <div className='DiaryList'>
      
      {/* select box , 새글쓰기 버튼 */}
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select value={sortType} onChange={onChangeSortType}>
            {/* 변경되는 내용을 state로 처리 */}
            {/* map에서 끄집어내는 것은 {} 중괄호 블락이 아니고 ()소괄호 블락  */}
            {sortOptionList.map((it , idx) => (
              <option key={idx} value={it.value}> {it.name} </option>
              // 방번호 : idx
            ))}
          </select>
        </div>
        
      <div className='right_col'>
          <Button text ={"새글쓰기"} type={"positive"} onClick={()=> {navigate('/new')}}/>
      </div>
      </div>
      {/* DiaryItem을 처리하는 블락 */}
      <div className='list_wrapper'>
        {
            sortData.map((it)=> (
              <DiaryItem key={it.id} {...it}/>    // map으로 돌릴 때는 key 값을 넣어주어야 오류가 안뜸

              )

            )

        }


      </div>
    </div>
  );
}

export default DiaryList;