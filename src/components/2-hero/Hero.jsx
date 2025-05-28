import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <section className='hero flex'>
       <div className='left-side'>
        <div className='parent-simo'>
          <img src="./simo.png" className='heropic' alt="mohamed-elkhair"/>
          <span className='icon-verified'></span>
        </div>
        <h1 className='title'>Web developer, ReactJs</h1>
        <p className='sub-title'>I’m a versatile professional with a background as a Computer and Data Management Specialist, 
              IT Operations Specialist, Technical Support Specialist, and Business Development Executive. Over the years, 
                I’ve developed a strong foundation in technology, problem-solving, and client relations.
        </p>
        <div className='icons'>
          <span className='icon-instagram icon-instagram'></span>
          <span className='icon-twitter icon-twitter'></span>
          <span className='icon-github icon-github'></span>
          <span className='icon-linkedin icon-linkedin'></span>
        </div>
       </div>
       <div className='right-side animation border'>animation</div>
    </section>
  )
}

export default Hero;
