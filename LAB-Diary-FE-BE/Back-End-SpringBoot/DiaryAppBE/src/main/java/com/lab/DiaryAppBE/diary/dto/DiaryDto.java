package com.lab.DiaryAppBE.diary.dto;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiaryDto {

    private Long id;
	
	private String content;
	
	private int emotionId;
	
	private Timestamp Date;
	
	
	
	
}
