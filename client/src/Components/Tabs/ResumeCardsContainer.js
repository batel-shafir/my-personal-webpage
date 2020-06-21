import ResumeCard from "./ResumeCard";
import React from 'react';
import './Resume.scss'; 

export default function ResumeCardsContainer(props) {



    return (
        <div className="center-cards">
            <div className="side-by-side">
                <ResumeCard section="professional experience" />
                <ResumeCard section="education"/>
                <ResumeCard section="military experience"/>
                <ResumeCard section="volunteering"/>
            </div>  
        </div>
    
    )
}