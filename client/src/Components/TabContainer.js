import React from 'react';
import Home from './Tabs/Home';
import About from './Tabs/About';
import ResumeCardsContainer from './Tabs/ResumeCardsContainer';
import CustomizedTimeline from './Test';




function TabContainer(props) {
    const { name, isMobileView } = props;
    
    const getComponentByName = (name) => {
        switch(name){
            case "Home":
                return <Home isMobileView={isMobileView}/>
            case "About Me":
                return <About isMobileView={isMobileView}/>
            case "Resume":
                return <ResumeCardsContainer/>

            }
    }
    return (
        <div>
            {getComponentByName(name)}
        </div>
        
    )
}
export default TabContainer;