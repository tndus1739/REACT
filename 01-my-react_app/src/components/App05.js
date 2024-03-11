function App05() {
  // javascript 블락


  // undefined 자체를 리턴하면 리엑트 오류가 발생함
  // undefined : 변수에 어떤 자료형을 넣을 지 알 수 없는 경우
  const name = undefined;

  return name || "값이 undefined 입니다.";
}

export default App05;
