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