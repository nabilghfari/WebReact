import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop/>
      <h1>ONLY WATAME</h1>
      <p>It's Is Not Watame's Fault</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ONLY WATAME!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Only Watame!')}
        >
          WATAME'S CHANNEL <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;