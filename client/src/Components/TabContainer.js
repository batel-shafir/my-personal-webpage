import React from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';


function TabContainer(props) {
    const { name, handleChange } = props;
    
    const getComponentByName = (name) => {
        switch(name){
            case "Home":
                return <Home handleChange={handleChange}/>
            case "About Me":
                return <About/>
            case "Resume":
                return <Resume/>


        }
    }
    return (
        <div className={`tab-${name}-container`}>
           {getComponentByName(name)} 
        </div>
    )
}
export default TabContainer;