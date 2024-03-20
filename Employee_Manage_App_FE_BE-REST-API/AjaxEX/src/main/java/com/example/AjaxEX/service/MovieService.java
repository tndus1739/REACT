package com.example.AjaxEX.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.AjaxEX.entity.Movie;
import com.example.AjaxEX.repository.MovieRepository;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MovieService {
		
	private final MovieRepository movieRepository;
	
	public List<Movie> getMovie() {
		
		return movieRepository.findAll();
	}
	
	
	
}
