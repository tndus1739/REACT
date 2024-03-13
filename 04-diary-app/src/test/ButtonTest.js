import React from 'react';
import Button from '../components/Button';
import {getEmotionImgById} from '../utils';
import './ImageTest.css';

function ButtonTest(props) {
  return (
    <div>
      <h1> Button Test</h1>

      <div> <Button text = "Default" type="default"></Button></div>
      <div> <Button text = "Positive" type="positive"></Button></div>
      <div> <Button text = "Negative" type="negative"></Button></div>

      <div className='emotion'>
          <img src= {getEmotionImgById(2)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(3)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(4)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(5)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(1)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(2)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(3)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(4)} alt="이모션이미지"/>
          <img src= {getEmotionImgById(5)} alt="이모션이미지"/>
      </div>





    </div>
  );
}

export default ButtonTest;