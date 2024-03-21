package com.example.AjaxEX.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter   // @Getter , @Setter 필수 
@Setter
@NoArgsConstructor // 자동으로 기본생성자 만들어줌

public class AjaxDto {
	
	// 기본 생성자가 반드시 존재해야한다.
	
	// ★ DTO : 
	// client에서 넘어오는 필드의 값을 받을 때 사용
	// 서버에서 처리된 결과를 client에게 보낼 때도 사용
	
	public AjaxDto (String data1 , String data2) {
		param1 = data1 ;
		param2 = data2 ;
		
	}
	
	// 변수 이름이 파라미터로 넘어오는 변수 이름과 동일해야 한다. 
	
	private String param1 ;  // 주입된 값을 필드에 집어넣는다

	private String param2 ;
	

}
