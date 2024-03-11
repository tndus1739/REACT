
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';

function App() {
  return (
    <div className="App">
      <h1>useState vs useReducer</h1>
      <hr/>
      <h4> UseState로 구문 출력</h4>
      <UseState/>

      <hr/>
      <h4> UseReducer로 구문 출력</h4>
      <UseReducer/>

    </div>
  );
}

export default App;
