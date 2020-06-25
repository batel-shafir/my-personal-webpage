import React, { useState } from 'react';
import mainImage from '../../assets/images/me1.jpg';
import './About.scss'; 
import Radio from '@material-ui/core/Radio';



function About(props) {
  const [selectedValue, setSelectedValue] = useState('a')

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="about">
        <div className="about-content">
          <img className="my-img" src={mainImage}></img>
          <div className="">
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button"
              aria-label="A"
              color="default"
            />
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-button"
              aria-label="B"
              color="default"
            />
            <Radio
              checked={selectedValue === 'c'}
              onChange={handleChange}
              value="c"
              name="radio-button"
              aria-label="C"
              color="default"
            />
            <Radio
              checked={selectedValue === 'd'}
              onChange={handleChange}
              value="d"
              name="radio-button"
              aria-label="D"
              color="default"
            />
            <Radio
              checked={selectedValue === 'e'}
              onChange={handleChange}
              value="e"
              name="radio-button"
              aria-label="E"
              color="default"
            />
          </div>
            <div className="about-body">
              {selectedValue ==='a' &&<div> My name is Batel Shafir. <br/> I'm a Frontend developer, based in Tel Aviv, IL.</div> }
              {selectedValue ==='b' && <div> I have serious passion for UI and web development.</div>}
              {selectedValue ==='c' && <div> I'm highly motivated, hardworking & creative. </div>}
              {selectedValue ==='d' && <div> I have excellent interpersonal skills & high emotional intelligence.</div>}
              {selectedValue ==='e' && <div> I believe that "God is in the details".</div>}
            </div> 
           
      </div> 
    </div>  
  );
}

export default About;