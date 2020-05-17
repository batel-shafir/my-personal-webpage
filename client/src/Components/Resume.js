import React from 'react';
import './Resume.scss'; 
import bizzabo from '../assets/images/bizzabo.png';


import { Grid } from '@material-ui/core';

function Resume(props) {
  return (
    <div className="resume-container">
    <Grid className="resume-grid" container spacing={3}>
        <Grid container item xs={12} spacing={3}>
        <>
        <Grid className="logo-column" item xs={2}>
        <img className="logo" src={bizzabo} width="80" height="80" ></img> 

        </Grid>
        <Grid item xs={10}>
        Bizzabo | Frontend developer | 2019-ongoing
        </Grid>
      </>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            bi
        </Grid>
        <Grid container item xs={12} spacing={3}>
            gi
        </Grid>
    </Grid>
    </div>
    
  );
}

export default Resume;