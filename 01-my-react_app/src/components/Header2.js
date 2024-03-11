function Header () {

  // JavaScript 코드 블락

    return (

  // return 이후 부터 JSX블락. 여기서는 주석처리가 됨

      <div>

          {/*JSX 블락 내부에 주석 처리*/} 
          // 출력내용입니다. 여기서는 주석처리가 안되고 출력됨

          <div
            
            // 시작태그 내부에 주석이 작동됨
          
          >

            
          두번째 헤더입니다.</div>
          <div>서브 메뉴입니다.</div>
          <hr/>
      </div>
      
    );

}

export default Header;