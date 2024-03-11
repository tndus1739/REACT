function Header() {   // 첫글자는 대문자

  return (
      <div>
        <h1> 여기는 Header 블락입니다.</h1>
        <hr></hr>
      </div>
  );
}

export default Header;   // 외부에서 가져다 사용하기 위해서는 export 해야한다. 

// 자바스크립트에서는 함수도 객체이다