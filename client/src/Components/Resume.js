import React from 'react';
import './Resume.scss'; 


function Resume(props) {
  const {isMobileView} = props;

  return (
    <div className="resume-container">
      <div>
          <div className="email-address bold color-4">batyusahfir@gmail.com</div>
      </div>
      <div className="section-header color-3 bold">Professional Experience:</div>
      <div className="font-size-14">
        <span className="color-4 underline">Bizzabo | Frontend developer | 2019-ongoing</span>
          <li>Developed a web-application for event management using JS(ES6), React, Redux and Node.js in a Kubernetes environment.</li>
          <li>Took part in mobile app development (using React Native) and testing using both devices and simulators.</li>
          <li>Developed and executed automated tests using Selenium and Nightwatch JS.</li>
          <li>Worked in a CI/CD setup using Docker and Kubernetes.</li>
          <li>Implemented parts of the Corona Virus rapid response solution on the client side by 
            integrating with 3rd party video streaming solution into existing features, 
            while working closely with product mangers and designers to swiftly provide a high-quality product.
          </li>
      </div><br/>
      <div className="font-size-14">
        <span className="color-4 underline">Emalogic | Frontend developer - Internship | 2017</span>
          <li>Developed a User Interface project using TypeScript, HTML, CSS, Angular 2 and Redux.</li>
      </div>
      <div className="section-header color-3 bold">Education:</div>
      <div className="font-size-14">
        <span className="color-4 underline">BSc in Computer Science and English Linguistics | BGU of the Negev | 2016-2020</span>
          <li>Graduated with an average score of 81/100.</li>
      </div>
      <div className="section-header color-3 bold">Tools and Skills:</div>
      <div className="font-size-14">
          <li>Proficient in JavaScript, Html 5, CSS3.</li>
          <li>React, Redux, Node.js.</li>
          <li>Experience in TypeScript, Java, Python, C and SQL.</li>
          <li>Familiar with Circle CI, Kubernetes and docker.</li>
          <li>Git, GitHub Gitlab, Jira.</li>
      </div>
      <div className="section-header color-3 bold">Military Experience:</div>
      <div className="font-size-14">
        <span className="color-4 underline">Israeli Air Force | Technical English Instructor | 2010-2012</span>
          <li>Taught vocabulary and improved technical reading skills to IAF technicians.</li>
          <li>Received an excellence award from the Base Commander.</li>
      </div>
      <div className="section-header color-3 bold">Volunteering:</div>
      <div className="font-size-14">
        <span className="color-4 underline">Door2Dor | Frontend developer | April 2020-ongoing</span>
        <li>Volunteered as part of the development team at Door2Dor, 
          a nonprofit organization that connects volunteers and elders during the current 
          CoronaVirus lockdown based on their location.</li>
        <li>Implemented extensive parts of the web-app, using TypeScript and React best practices, including hooks.</li> 
      </div><br/>
      <div className="font-size-14">
        <span className="color-4 underline">StandWithUs Fellowship Program | 2017-2018</span>
          <li>Head of Social Media team (a total of 5 team members).</li>
      </div>
     </div>
    
  );
}

export default Resume;