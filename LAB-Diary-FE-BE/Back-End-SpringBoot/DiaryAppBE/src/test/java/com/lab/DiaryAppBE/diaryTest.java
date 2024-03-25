package com.lab.DiaryAppBE;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;

@SpringBootTest
public class diaryTest {
	
	@Autowired
	private DiaryRepository diaryRepository;
	
	@Test
	void diaryInsert() {
		Diary d = null ;
		
		for (int i = 1 ; i<= 5 ; i++) {
			
			d = new Diary();
			
			d.setContent("상세내용 : " + i);
			d.setEmotionId(i);
			d.setDate(Timestamp.valueOf(LocalDateTime.now()));
			
			
			diaryRepository.save(d);
		}
	}
}
