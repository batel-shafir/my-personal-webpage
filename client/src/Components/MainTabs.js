import React, { Fragment } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import TabPanel from './TabPanel';
import TabContainer from './TabContainer';


const TabNames = [ 
  "Home", 
  "About Me",
  "Resume" ,
];


function MainTabs(props) {    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const isMobileView = window.innerWidth <= 760;


    return (
      <div className="main-tabs">
         <AppBar position="static" color='transparent' style={{ 'background': 'linear-gradient(to left, #FFFFFF, #ECE9E6)' }} className="main-tabs-bar">
          <Tabs value={value} 
                onChange={handleChange} 
                scrollButtons="auto"
                centered={!isMobileView}
                scrollable={isMobileView}
                indicatorColor='primary' 
                aria-label="simple tabs example">
          {TabNames.map(name => <Tab label={name} handleChange={handleChange}/>)}
          </Tabs>
         </AppBar>
         {TabNames.map((name, index) =>
         <TabPanel value={value} index={index}>
          <TabContainer name={name} isMobileView={isMobileView}></TabContainer>
        </TabPanel>
        )}
       

      </div>
    );
  }

  export default MainTabs;