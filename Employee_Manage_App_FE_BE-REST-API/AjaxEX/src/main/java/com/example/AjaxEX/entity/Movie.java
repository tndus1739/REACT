package com.example.AjaxEX.entity;

import jakarta.persistence.Column;
// javax(spring boot 2.x)가 jakarta(spring boot 3.x)로 변경됨
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id_num;
	
	private String backdrop_path;
	
	private String original_language;
	
	private String original_title;
	
	private String overview;
	
	private String poster_path;
	
	private String release_date;
	
	private String title;
	
	private int vote_count;
	
}
