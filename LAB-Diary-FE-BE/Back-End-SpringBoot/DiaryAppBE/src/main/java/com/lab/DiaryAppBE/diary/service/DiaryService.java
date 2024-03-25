package com.lab.DiaryAppBE.diary.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lab.DiaryAppBE.diary.dto.DiaryDto;
import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DiaryService {
	
	private final DiaryRepository diaryRepository;
	
	
	// Diary List
	public List<Diary> getDiaryList() {
		return diaryRepository.findAll();
	}
	
	// Diary 정보
	public Diary createDiary (DiaryDto diaryDto) {
		Diary diary = new Diary(diaryDto); ////-----------------------------
		
		System.out.println("다이어리 등록성공");
		
		return diaryRepository.save(diary);
		
	}

}
