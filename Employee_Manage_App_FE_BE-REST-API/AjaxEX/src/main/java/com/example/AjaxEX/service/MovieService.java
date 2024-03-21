package com.example.AjaxEX.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.AjaxEX.dto.MovieDto;
import com.example.AjaxEX.entity.Movie;
import com.example.AjaxEX.repository.MovieRepository;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MovieService {
	
	// MovieService : 보안, 중복코드 방지 , 모듈화 (자주 사용하는 함수 정의)
	
	// Controller ==> Service ==> Repository
	// 서비스를 호출하는 것 : controller가 호출
	// 서비스가 제어하는 것 : Repositoty에 접근
	
	
	//
	
	
	// DI (의존성 주입 : 스프링 프레임 워크에 객체를 주입) : @RequiredArgsConstructor이 객체를 주입해줌 ( new키를 사용하지 않아도 됨)
	private final MovieRepository movieRepository;
			    //MovieRepository : 타입
	
	// DB에 값을 insert 메소드 
	public String movieInsert (MovieDto movieDto) {
		
		// MovieDTO : Client <==> MovieDTO Movie (Entity)  ==> MovieRepository ==> DB
		// 보안에 대해서 중간다리 ( 보안이슈 방지)
		
		// movieDTO의 모든 필드의 값을 Movie (Entity)로 주입
		
		Movie movie = movieDto.createMovie();
		
		System.out.println("====Movie (Entity의 값을 출력)====");
		System.out.println(movie.getOriginal_language());
		System.out.println(movie.getId_num());
		System.out.println(movie.getTitle());
		System.out.println(movie.getPoster_path());
		System.out.println("====Movie (Entity의 값을 출력)====");
		
		movieRepository.save(movie);   // DB에 저장
		
		return "insert 성공";
	}
	
	
	//DB의 Movie 테이블의 모든 레코드를 List<Movie> 가지고 와서 List<MovieDto>
	public List<MovieDto> selectAll () {
		
		System.out.println("호출------");
		
		List<MovieDto> movielist = new ArrayList();   // 빈 객체를 만듦
		
		// DB에서 모든 레코드를 가지고 옴
		List <Movie> movieListDB = movieRepository.findAll();
		
		// 출력
//		for (int i = 0 ; i < movieListDB.size() ; i++) {
//			Movie movie = movieListDB.get(i);
//			System.out.println("=======" + i + "=======");
//			System.out.println(movie.getOverview());
//			System.out.println(movie.getTitle());
//			System.out.println(movie.getOriginal_title());
//			System.out.println(movie.getVote_count());
//			System.out.println(movie.getPoster_path());
//		}
		
		// List <Movie> movieListDB ==> List<MovieDto> movieList
		// 주의 : List는 for문 밖에서 선언 ---> (List<MovieDto> movielist = new ArrayList(); )
		//      List에 넣을 객체는 for문 안에서 선언되어야 객체 주소가 각각 다르게 만들어진다.
		for (int i = 0 ; i < movieListDB.size() ; i++ ) {
			Movie movie = movieListDB.get(i);
			MovieDto movieDto = new MovieDto();
			
			// movie Entity의 값을 movieDTO에 주입
			movieDto = movieDto.of(movie); 
			movielist.add(movieDto); 
		}
		
		
		return movielist;
	}
	
		// DB에 값을 수정하는 메소드 : put 요청 
		// 매개변수 : id (int) , MovieDTO
	
			public void updateMovie (int id , MovieDto movieDto) {
		
		// id에 대한 Movie 객체를 가지고 옴
		   Optional<Movie> op = movieRepository.findById(id);
	
		   Movie movie = op.get();
		   
		   System.out.println(movie.getTitle());
		   System.out.println(movie.getVote_count());

	    // Movie 객체에 movieDTO
//		   movie = movieDto.createMovie();    // ModelMapper 사용
		   
		   movie.setTitle(movieDto.getTitle());                     // movie : db에서 끄집어낸 것
		   movie.setVote_count(movieDto.getVote_count());      
		   movie.setOriginal_language(movieDto.getOriginal_language());
		   
		   
		//save(Movie)  // 수정완료   
		   movieRepository.save(movie);
		
			
			}
	
}
