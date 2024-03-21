package com.example.AjaxEX.dto;

import org.modelmapper.ModelMapper;

import com.example.AjaxEX.entity.Movie;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@ToString
@NoArgsConstructor  // 기본 생성자 생성

public class MovieDto {

	// FE (JSON) ====> Controller   ====> NovieDTO ====> MovieService  ===> MovieRepository   ===> DB에 저장
	
	
	private String backdrop_path ;
	private int id_num;
	private String original_language;
	private String original_title;
	private String overview;
	private String poster_path;
	private String release_date;
	private String title;
	private int vote_count;
	
	// ModelMapper :  DTO에 있는 필드와 Entity에 있는 필드와 자동으로 맵핑 (대량의 데이터 처리가능) (2개의 필드명이 같아야 한다. )
	// ModelMapper 라이브러리 등록이 필요 
	 private static ModelMapper modelMapper = new ModelMapper();  // 객체화가 됨
     
	 
	 
	    //Client form 에서 넘어오는 값을 DTO에 담아서 Movie Entity 클래스에 적용후 DB에 저장  
	    public Movie createMovie(){
	        return modelMapper.map(this, Movie.class);   // 여기에 있는 각 필드의 값을 (this- dto)을 movie entity 클래스에 주입
	    }                                                // this : 여기 필드에 있는 것
	    
	    //DB에서 가져온 Movie Entity 클래스를 DTO 에 주입해서 client 로 전송 하기 위한 매핑 
	    public static MovieDto of(Movie movie) {
	        return modelMapper.map(movie,MovieDto.class);
	    }
}
