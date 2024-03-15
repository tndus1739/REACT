import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";




/*

★ 컴포넌트가 아니고 자주 사용하는 함수 정의 
    - 정의해 놓은 함수를 외부에서 사용하려면 export
    - export는 하나의 js파일에 여러개의 함수에서 설정
        - import {함수} from '컴포넌트'


    - export default 는 하나면 설정
        - import 함수 from '컴포넌트'


*/


// Image id값을 받아서 해당 image 를 리턴하는 함수를 생성
// 리엑트에서 이미지를 사용하려면 해당 이미지가 import되어야 사용가능함 
// DB에는 이미지가 들어가는게 아니라 해당이미지의 id가 들어감

export const getEmotionImgById = (emotionId) => {

  // emotionId 가 Number , String 이 있으므로 String으로 변환해서 담아서 처리
  const targetEmotionID = String (emotionId);

  switch (targetEmotionID) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }

}

// 배열을 외부에서 가져와서 사용할 수 있도록 export 
export const emotionList = [

  { 
    id: 1,
    name : "완전 좋음",
    img : getEmotionImgById(1),
  },
  { 
    id: 2,
    name : "좋음",
    img : getEmotionImgById(2),
  },
  { 
    id: 3,
    name : "보통",
    img : getEmotionImgById(3),
  },
  { 
    id: 4,
    name : "나쁨",
    img : getEmotionImgById(4),
  },
  { 
    id: 5,
    name : "완전 나쁨",
    img : getEmotionImgById(5),
  },

];


// 날자를 인풋받아서 yyyy-mm-dd 형식으로 리턴을 돌려주는 함수
export const getFormattedDate = (targetDate) => {
  // 년도만 추출 (yyyy)
  let year = targetDate.getFullYear();    // getFullYear(); : yyyy형식으로 출려됨

  // 월만 추출 : 3월 -> 03월 일 때 ( 2월 + 1) : 0월 -> + 1    // getMonth() 일 때마나 데이터 형식이 0으로 출력되기 때문에 1을 더해주어야 한다.
  let month = targetDate.getMonth() + 1 ;
  // 일만 추출
  let day = targetDate.getDate();

  // month의 값이 10 이하일 경우 0을 붙여서 처리 
  if (month < 10) {
    month = `0${month}`;
  }

  // day의 값이 10 이하일 경우 0을 붙여서 처리 
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;

}


