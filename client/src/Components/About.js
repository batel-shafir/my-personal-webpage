import React from 'react';
import mainImage from '../assets/images/me1.jpg';

function About(props) {
  return (
    <div>
        <img className="main-img" src={mainImage}></img> 
        I am highly motivated, hardworking, creative, detailed oriented and an independent learner. I have excellent interpersonal skills and high emotional intelligence, which allows me to work well both in teams and individually as well as under time constraints. 
    </div>
    
  );
}

export default About;