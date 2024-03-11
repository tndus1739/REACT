export default function App02 () {

  // javascript
  
  const name = '바나나';

  // JSX 내부에서는 if문을 사용할 수 없다.
  // 삼항연산자를 사용해서 처리함

  return (

      <div>
        
          
            {
              name === '오렌지' ? <h1>오렌지 입니다.</h1> : <h1>오렌지가 아닙니다.</h1>

            }

      </div>


  );

}