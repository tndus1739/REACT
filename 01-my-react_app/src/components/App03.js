function App03 () {

    // javascript 블락

    const name = '바나나';
    // JSx 블락에서는 삼항 연산자 , && , || 사용

    return (

      <div>

         { name === '바나나' ? (<h1>바나나입니다. </h1>) : null }   {/* false 이면 출력이 안됨 (null이라서) */}


      </div>

    );


}

export default App03;