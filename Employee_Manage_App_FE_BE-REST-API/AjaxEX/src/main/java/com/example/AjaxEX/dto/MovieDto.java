package com.example.AjaxEX.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor  // 기본 생성자 생성

public class MovieDto {

	private String backdrop_path ;
	private int id_num;
	private String original_language;
	private String original_title;
	private String overview;
	private String poster_path;
	private String release_date;
	private String title;
	private int vote_count;
}
