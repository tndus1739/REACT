import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();  // 파라미터에 id값이 있음

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();   // page 가 refresh 되는 것을 방지

        const employee = {firstName, lastName, emailId}

        // 파라미터에 id값이 없으면 새사용자 등록 / id값이 있으면 사용자 수정

        if(id){                                         // PUT : 수정(update)
            EmployeeService.updateEmployee(id, employee).then((response) => {  // update 할때는 매개변수 2개 필요한다. (id값도 필요 )
                navigate('/employees')    
            }).catch(error => {
                console.log(error)
            })

        }else{                                          // POST : 등록 (insert)
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{    // id값을 종해서 get 한 것을 setter에 주입
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {     // title호출했을때 id값이 있으면 사원 수정 id값이 없으면 사원추가

        if(id){
            return <h2 className = "text-center">사원 수정</h2>
        }else{
            return <h2 className = "text-center">사원 추가</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> 이름 :</label>
                                    <input
                                        type = "text"
                                        placeholder = "이름을 넣어주세요"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}   // usestate 값 
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> 성 :</label>
                                    <input
                                        type = "text"
                                        placeholder = "성을 넣어주세요"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "email을 넣어 주세요"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} > 전송 </button>
                                <Link to="/employees" className="btn btn-danger"> 취소 </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent
