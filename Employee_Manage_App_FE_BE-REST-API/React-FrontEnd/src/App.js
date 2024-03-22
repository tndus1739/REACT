import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';   // 설치가 필요
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <ListEmployeeComponent />}></Route>
              <Route path = "/employees" element = { <ListEmployeeComponent />}></Route>
              <Route path = "/add-employee" element = { <AddEmployeeComponent />} ></Route> 
              <Route path = "/edit-employee/:id" element = { <AddEmployeeComponent />}></Route>
              {/* <AddEmployeeComponent /> : 등록할 때도 사용하고 수정할 때도 사용한다. */}
            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;
