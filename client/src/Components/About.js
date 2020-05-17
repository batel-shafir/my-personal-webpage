import React from 'react';
import mainImage from '../assets/images/me-camera.jpg';
import './About.scss'; 

//     independent learner.  
//pare time DIYing and Coocking. I take care of my plants in my spare time, cuddle my dog, and occasionally visit the beach that is 5 minutes walk from my flat.
function About(props) {
  const {isMobileView} = props;

  return (
    <div className="about">
    <div className="about-content">
        <div>My name is Batel Shafir and I'm a 
          <span className="color-1"> Frontend developer,</span>
        </div>
        <div> based in Tel Aviv, IL.</div>
        <div>I am highly
          <span className="color-1"> motivated</span>, 
          <span className="color-1"> hardworking </span> 
          & <span className="color-1" > creative</span>.
        </div>
        <div>I believe that 
          <span className="color-1"> "god is in the details"</span>
        , which helps me to perform well as a Frontend Developer and basically in everything I do.</div> 
        <div>
        <span className="color-1">I have excellent interpersonal skills </span>
         & high emotional intelligence.</div>
         <div>I spend a lot of my spare time
         <span className="color-1"> DIYing and Cooking</span>,
          take care of my plants, 
         <span className="color-1"> cuddle my dog, </span>
         and occasionally visit the beach that is 
         <span className="color-1"> 5 minutes</span> walk from my flat.
        </div>      
    </div>
    { <img className="my-img" src={mainImage}></img>}


</div>
    
  );
}

export default About;