import logo from './logo.svg';
import './App.css';

// 외부의 컴포넌트를 불러들임
// export만 있을 때는 {Header} /  export default 는 Header
// export 한 컴포넌트는 { } 블락내부에서 받아야 함

import {Header} from './components/Header4';   
import Footer from './components/Footer';
import App01 from './components/App01';
import App02 from './components/App02';
import App03 from './components/App03';
import App04 from './components/App04';
import App05 from './components/App05';

function App() {
  return (
    <div className="App">

      <Header/>

      <h1>
        나의 첫번재 리엑트 컴포넌트
      </h1>
      <h2>랜더링되어서 출력됨</h2>

      <Footer/>

      <br/> <p/>
      <hr/>
      <App01/>
    
      <hr/>
      <App02/>
      <hr/>
      <App03/>
      <hr/>
      <App04/>
      <hr/>
      <App05/>

    </div>
  );
}

export default App;
