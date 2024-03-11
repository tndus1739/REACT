import logo from "./logo.svg"; // './logo.svg' 를  imoport 하고 있음
import "./App.css"; // css도 import 되어있음
import {dummy} from "./Dummy";               // export로 내보내진건 { } import
import Movie from './components/Movie';      // export default로 내보내진건 { } 없이 import

// MAP을 이용해서 출력시킴
// dummy.results : 배열
// dummy.results.map() : 배열의 각 방의 값을 순환하면서 끄집어 온다.
// item : 배열에서 각 방에서 끄집어 낸 값 {}


function App() {
  return (
    <div>
      <h1>JSON 파일에서 영화 정보를 불러와서 출력</h1>
      <hr />

      <div className='app-container'>
         {/* MAP을 사용해서 출력 */}

          {
              dummy.results.map( (item) => {                  // dummy.results : 배열로 선언되어 있음 /  map: 한 번씩 순환 할 때마다 다음 객체
          
                  return <Movie                               // 이 안에는 콤마가 들어가면 안된다

                          title={item.title}  
                          poster_path ={item.poster_path}
                          vote_average = {item.vote_average}
                  
                  
                  
                  />

            }
            )

          }
      </div>


    </div>
  );
}

export default App;
