import React from 'react';
import mainImage from '../../assets/images/me1.jpg';
import './About.scss'; 

//     independent learner.  
//pare time DIYing and Coocking. I take care of my plants in my spare time, cuddle my dog, and occasionally visit the beach that is 5 minutes walk from my flat.
function About(props) {
  const {isMobileView} = props;

  return (
    <div className="about">
      <div className="about-content">
       
   
  <img className="my-img" src={mainImage}></img>    
      </div>
    </div>  
  );
}

export default About;