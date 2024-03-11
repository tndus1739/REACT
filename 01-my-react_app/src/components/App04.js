function App04() {
  // javascript 블락

  const name = "귤";
  // && 연산자를 사용함 , 쇼트 서킷을 발생시켜서 3항 연산자를 대신해서 사용

  return (
    <div>
      {name === "귤" && <h1>귤입니다. </h1>} {/* 좀 축약해서 씀*/}
    </div>
  );
}

export default App04;
