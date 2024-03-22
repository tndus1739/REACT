import axios from 'axios'

// 서버에게 비동기 통신하는 여러가지 방법 , http메소드를 사용해서 서버와 통신하는 방법
  // JSON 데이터로 (o) XML 데이터 (X) , 
  // get (select) , post(insert) , put(update - 모든필드) , patch (update - 일부필드)
  // delete (delete)
/*
  1. XMLHTTPRequest : 초창기에 사용 , 사용 구분이 복잡
  2. fetch          : JavaScript  기본 내장 , 라이브러리 설치 없이 사용 가능
  3. ajax           : Jqery 라이브러리 등록 <-- MPA (Server Side Randerring)
  4. axios          : React에서 많이 사용 , 라이브러리 설치가 필요
                      설치방법
                      npm install axios
                      yarn add axios
                      


*/
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:9999/api/employee';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)    // axious의 post 요청
    }

   getEmployeeById(employeeId){
       return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);

    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);    // employee (2번째 인자) : 수정할 데이터 
    }                                 

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();  // 객체화해서 export시킴