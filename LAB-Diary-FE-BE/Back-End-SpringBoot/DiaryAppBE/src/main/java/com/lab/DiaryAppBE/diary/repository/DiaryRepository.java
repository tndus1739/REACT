package com.lab.DiaryAppBE.diary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab.DiaryAppBE.diary.entity.Diary;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {

}
