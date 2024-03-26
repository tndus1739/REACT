package com.lab.DiaryAppBE.diary.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lab.DiaryAppBE.diary.dto.DiaryDto;
import com.lab.DiaryAppBE.diary.entity.Diary;
import com.lab.DiaryAppBE.diary.repository.DiaryRepository;
import com.lab.DiaryAppBE.diary.service.DiaryService;
import com.lab.DiaryAppBE.exception.ResourceNotFoundException;

import groovy.lang.Delegate;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin("*")  //모든 도메인, 모든 요청방식' 에 대해 허용 한다
@RequiredArgsConstructor
public class DiaryController {

	private final DiaryRepository diaryRepository;
	private final DiaryService diaryService;
	
	
	@GetMapping("/diary")
	
	public List<Diary> getAllDiary () {
		System.out.println("diary 호출성공");
		return diaryService.getDiaryList();
	}
	
	// diary 생성 REST API
	@PostMapping("/diary")
	public Diary createDiary(@RequestBody DiaryDto diaryDto) {
		
		
		System.out.println(diaryDto);
		
		return diaryService.createDiary(diaryDto);
	}
	
	// diary 상세내용 보기
	@GetMapping("/diary/{id}")
	public ResponseEntity<Diary> getDiaryId (@PathVariable long id) {
		Diary diary = diaryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id:" + id));
		
		return ResponseEntity.ok(diary);
	}
	
	
	// diary 수정하기
	@PutMapping("/diary/{id}")
	public ResponseEntity<Diary> updateDiary (@PathVariable long id , @RequestBody Diary diaryDetail){
		
		Diary updateDiary = diaryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id:" + id));
		
		updateDiary.setContent(diaryDetail.getContent());
		updateDiary.setEmotionId(diaryDetail.getEmotionId());
		updateDiary.setDate(diaryDetail.getDate());
		
		diaryRepository.save(updateDiary);
		
		
		return ResponseEntity.ok(updateDiary);
	}
	
	
	// diary 삭제하기
	@DeleteMapping("/diary/{id}")
	public ResponseEntity<HttpStatus> deleteDiary (@PathVariable long id) {
		Diary diary = diaryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Diary not exist with id:" + id));
		diaryRepository.delete(diary);
		
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
