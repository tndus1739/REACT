package com.example.AjaxEX.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.AjaxEX.dto.AjaxDto;
import com.example.AjaxEX.dto.MovieDto;

import oracle.jdbc.proxy.annotation.Post;

@Controller // 일반 @Controller에서는 @ResponseBody를 사용해야 json포멧으로 변경해서 전송이 됨
public class AjaxController {
	
	//http://localhost:9696/ex01
	@GetMapping("/ex01")
	public String ex01() {
		System.out.println("ex01 요청 성공");
		
		// res : index.html 파일의 소스코드가그대로 전송
		
		return "index";
	}
	
	//http://localhost:9696/ex02
	// @ResponseBody : return 되는 자료형 앞에 @ResponseBody를 선언하면 json포멧으로 변경해서  client에게 전송됨
	@PostMapping("/ex02")
	public @ResponseBody String ex02 () { 
		System.out.println("ex02 요청 성공");
		return "★★★★★";
	}
	
	// get요청에서 param으로 넘기는 값을 받기
	// client 에서 넘기은 data 받기 : param1 , param2
	@GetMapping("/ex03")
	public @ResponseBody String ex03 ( // parameter로 넘어오는 것은 String 
			@RequestParam ("param1") String param1 ,
			@RequestParam ("param2") String param2 
			) { 
		System.out.println("ex03 요청 성공");
		System.out.println("param1의 값 : " + param1 );
		System.out.println("param2의 값 : " + param2 );
		
		return "ex03 요청 성공";
	}
	
	// post요청에서 param으로 값 넘기기 : /ex04?param1=값&param2=값
	@PostMapping("/ex04")
	public @ResponseBody String ex04 ( // parameter로 넘어오는 것은 String 
			@RequestParam ("param1") int param1 ,
			@RequestParam ("param2") int param2 
			) { 
		System.out.println("ex04 요청 성공");
		System.out.println("param1의 값 : " + (param1 + 10));
		System.out.println("param2의 값 : " + (param2 + 100 ));
		
		return "ex04 요청 성공";
	}

	// get 요청에서 param으로 보내는 변수의 값을 DTO에 필드에 주입
	// ★주의 : param의 변수명과 DTO 필드 명이 같아야 자동 주입
	// @ModelAttribute : param으로 넘어오는 값을 한 번에 DTO에 주입
	// cf) @RequestParam : 넘어오는 값을 하나씩 주입할 때
	@GetMapping("/ex05")
	public @ResponseBody AjaxDto ex05 (   // AjaxDto : 객체 자체에 있는 필드값을 던져줌
			
			@ModelAttribute AjaxDto ajaxDto
			) { 
		System.out.println("ex05 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		return ajaxDto;
	}
	
	@PostMapping("/ex06")
	// @ResponseBody(직렬화) : 메모리에서만 사용할 수 있는 객체를 네트워크로 보낼 수 있게 JSON으로 데이터 포멧을 변경하는 것 
	public @ResponseBody AjaxDto ex06(  
			@ModelAttribute AjaxDto ajaxDto
			) {
		System.out.println("ex06 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		return ajaxDto;
	}

	// client 에서 JSON으로 서버로 전송 --> 
	// @RequestBody(역직렬화) : JSON으로 넘어오는 것을 DTO에 주입 (객체 , RAM) 
	//                       [네트워크에 보내던 데이터를 수정하기 위해서는 다시 객체화시켜야 함]
	// @ResponseBody(직렬화)  : DTO   -->  JSON
	// ★★ 주의 : JSON 형식의 Data은 @@GetMapping으로 서버로 전송하면 오류가 발생한다.(글자수 제한 때문에) , POST로 전송해야함 
	@PostMapping("/ex07")  
	public @ResponseBody AjaxDto ex07(
			@RequestBody AjaxDto ajaxDto
			) {
		System.out.println("ex07 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		return ajaxDto;
	}
	
	// List<AjaxDto> : [{객체},{객체},{객체}] --> DB 테이블의 각각의 레코드 , select ALL
	@PostMapping("/ex08")
	public @ResponseBody List<AjaxDto> ex08 (
			@RequestBody AjaxDto ajaxDto
			) {
		System.out.println("ex08 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		List<AjaxDto> dtoList = new ArrayList();
		
		dtoList.add(ajaxDto);
		dtoList.add(new AjaxDto("고양이", "햄버거"));
		dtoList.add(new AjaxDto("포메", "비숑"));
		
		return dtoList;
	
	}
	
	// REST API 통신을 할 때
	// ResponseEntity : JSON 형식으로 변환해서 내보냄 + HTTP 상태코드를 내보낼 수 있다	
	//                  data + http 상태코드를 리턴 , client에서 좀 더 세밀한 컨트롤을 할 수 있음
	//                  @ResponseBody를 사용하지 않아도 된다.
	@PostMapping("/ex09")
	public ResponseEntity ex09 (
			@RequestBody AjaxDto ajaxDto
			) {
		System.out.println("ex09 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		// 상태코드도 controll 가능
		return new ResponseEntity<>(ajaxDto, HttpStatus.OK);
//     	return new ResponseEntity<>(ajaxDto, HttpStatus.NOT_FOUND);
		
	}
	
	
	@PostMapping("/ex10")
	public ResponseEntity ex10 (
			@RequestBody AjaxDto ajaxDto
			) {
		System.out.println("ex010 요청 성공");
		System.out.println("Dto param1의 값 : " + ajaxDto.getParam1() );
		System.out.println("Dto param2의 값 : " + ajaxDto.getParam2() );
		
		List<AjaxDto> dtoList = new ArrayList();
		
		dtoList.add(ajaxDto);
		dtoList.add(new AjaxDto("사과","배"));
		dtoList.add(new AjaxDto("딸기","바나나"));
		
		return new ResponseEntity<>(dtoList, HttpStatus.OK);  // dtoList가 JSON으로 넘어간다.
	//  return new ResponseEntity<>(dtoList, HttpStatus.UNAUTHORIZED);  // UNAUTHORIZED : 권한이 없다.

	}
	
//	@PostMapping("/movie")
//	public ResponseEntity movie_lab (
//			@RequestBody MovieDto movieDto
//			) {
//		System.out.println("ex010 요청 성공");
//		
//		
//		return null;
//	}
//	
	
	@GetMapping("/movie")
	public String movie() {
		System.out.println("movie 요청 성공");
		
		// res : index.html 파일의 소스코드가그대로 전송
		
		return "index";
	}
	
	
}
