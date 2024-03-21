package com.example.AjaxEX.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.AjaxEX.entity.Movie;


@Repository  // 어노테이션 붙여도되고 생략가능
public interface MovieRepository extends JpaRepository <Movie, Integer> {   // Integer 대신에 int도 됨
	
	// sql 쿼리를 자바의 메소드를 사용해서 처리 
	// crud 할 수 있는 메소드들이 내려옴
	// findAll() : DB의 Movie 테이블의 모든 레코드  : List<Movie>
	// findById() : DB의 Movie 테이블의 하나의 레코드 : Optional<Movie>
	// save() : DB의 Movie 테이블의 값을 Insert , Update(끄집어내서 , 수정 후 )
	// delete() : DB의 Movie 테이블의 모든 레코드 삭제

}
