package com.lab.DiaryAppBE.diary.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import com.lab.DiaryAppBE.diary.dto.DiaryDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Diary {
  
	public Diary(DiaryDto diaryDto) {
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column (name = "content")
	private String content;
	
	@Column (name = "emotion_id")
	private int emotionId;
	
	// 1970.01.01  ===> 숫자 
	@Column (name = "date")
	private Timestamp Date;
	
}
