package com.example.AjaxEX.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Movie {

	@Id
	private int id_num;
	
	private String backdrop_path;
	
	private String original_language;
	
	private String original_title;
	
	private String overview;
	
	private String poster_path;
	
	private String release_date;
	
	private String title;
	
	private int vote_count;
	
}
