package com.example.AjaxEX.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.AjaxEX.dto.MovieDto;
import com.example.AjaxEX.service.MovieService;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor

@RestController 
// @RestController : @Resposebody + @Controller : 메소드에서 리턴되는 모든 타입은 JSON
//                   @Responsebody를 쓰지 않아도 하위에 있는 모든 것들이 json포멧으로 돌아가게 됨
//                   swagger : API 문서를 자동으로 생성

public class MovieRESTController {
	
	/*
	   REST API : URL에 동사를 사용하지 않는다
	   
	// swagger 라이브러리 : @RestController 하위의 메소드의 요청 주소를 게더링 해서 API 문서를 자동으로 생성  
	    
	   GET    : /movie    : selectAll , return : [{객체},{객체},{객체}] , List<Movie> , Page<Movie>
	   GET    : /movie/1  : select , return : {} , Movie
	   POST   : /movie    : insert [insert 할 때는 post 사용] , data(서버로 insert 값을 전송함 , JSON) , return(x)
	   PUT    : /movie/1  : update(모든컬럼) , data(서버로 update 값을 전송함 , JSON) , return(x)
	   DELETE : /movie/1  : delete
	  */
	
	
	
	
	

	
	// DI 객체 주입 : @RequiredArgsConstructor
		private final MovieService movieService ; // 객체 주입 필요 (원래는 상단에 위치해야 한다. )
		
		// Movie 의 POST 요청을 처리하는 메소드 : insert 해라
		@PostMapping("/movie")
		// @ResponseBody(직렬화) : 메모리에서만 사용할 수 있는 객체를 네트워크로 보낼 수 있게 JSON으로 데이터 포멧을 변경하는 것 
		public ResponseEntity<String>  movieInsert (  // <String> : 안에 타입을 적어줘도 되고 생략해도 된다.
				
				// client 에서 던지는 객체를 자바에서 input
				@RequestBody MovieDto movieDto
				) {  
			System.out.println("============DTO 값을 출력============");
			System.out.println(movieDto.getOriginal_title());
			System.out.println(movieDto.getPoster_path());
			System.out.println(movieDto.getOverview());
			System.out.println(movieDto.getTitle());
			System.out.println("============DTO 값을 출력============");
			
			String complate = movieService.movieInsert(movieDto);
			return new ResponseEntity<String>(complate, HttpStatus.OK);
		}


		// // 서버에 get요청으로 DB에 값을 콘솔에 출력하기 [{}, {}, {}]
		// get , movie 테이블의 전체 내용을 출력
		
		// get 요청은 반드시 return이 필요
		@GetMapping("/movie")
		public ResponseEntity <List<MovieDto>>getMovieAll() {
			System.out.println("movie 요청 잘받음");
			
			List<MovieDto> movieList = movieService.selectAll();
		return new ResponseEntity<>(movieList , HttpStatus.OK);
		}
		
		
		// 데이터 수정 로직 : put , /movie/{id}
		@PutMapping("/movie/{id}")
		public ResponseEntity updateMovie(
				@PathVariable("id") int id ,
				@RequestBody MovieDto movieDto
				
				) {
			
			System.out.println("put 요청처리됨");
			System.out.println(id);
			System.out.println(movieDto.getTitle());
			
			movieService.updateMovie(id, movieDto); 
			
			return ResponseEntity.ok(movieDto);
		}
		
		// 데이터 삭제 로직 : delete , /movie/{id} : id에는 각 각 다른 값이 들어옴
		@DeleteMapping("/movie/{id}")
		public ResponseEntity<String> deleteMovie(
				
				@PathVariable("id") int id
				) {
			System.out.println("delete 요청 성공" + id);
			
			movieService.deleteMovie(id);
			
			return new ResponseEntity("삭제성공//",HttpStatus.OK) ; 
	 	//	return ResponseEntity.ok("삭제성공//") ;  [이렇게 해도 됨]
				
		}
		
		// 글 상세내용 보기 , get , /movie/{id}
		@GetMapping("/movie/{id}")
		public ResponseEntity<MovieDto> getDetail (
				@PathVariable("id") int id
				){
			System.out.println("요청 성공 " + id);
			
			MovieDto movieDto = movieService.getMovieDetail(id);
			
			
			return ResponseEntity.ok(movieDto);
		}
		
}
