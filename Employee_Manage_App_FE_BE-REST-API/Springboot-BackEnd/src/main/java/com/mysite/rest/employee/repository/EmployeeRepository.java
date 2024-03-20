package com.mysite.rest.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mysite.rest.employee.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
// ORM ( MyBatis, JPA) : Repository : 메소드를 사용해서 실제 테이블에 CRUD
//                       [MyBatis : 쿼리로 작성, JPA : 쿼리 없이도 작성 가능]	
//                       DAO : DB를 CRUD 쿼리하는 객체
// Select All : findAll(), List<Employee> 에 들어가 있음 = select * from Employee [ 테이블 내에 모든 레코드를 가져온다.]
// Select     : FindById (Employee) , Optional <Employee> : 하나씩 담을 수 있다  
// Update , Insert : save (Employee) [Update : 기존의 데이터에 수정 / Insert : 아예 새로운 데이터 ]
// delete          : delete (Employee)
	
	
	
}
