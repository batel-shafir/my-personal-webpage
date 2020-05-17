import React from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';


function TabContainer(props) {
    const { name, isMobileView } = props;
    
    const getComponentByName = (name) => {
        switch(name){
            case "Home":
                return <Home isMobileView={isMobileView}/>
            case "About Me":
                return <About isMobileView={isMobileView}/>
            case "Resume":
                return <Resume isMobileView={isMobileView}/>


        }
    }
    return (
        {getComponentByName(name)} 
    )
}
export default TabContainer;