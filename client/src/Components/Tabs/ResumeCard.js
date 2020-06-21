import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ProfessionalExperience from '../../assets/images/job.jpg';
import Education from '../../assets/images/school.jpg';
import Volunteering from '../../assets/images/heart.jpg';
import Military from '../../assets/images/army.jpg'

import './Resume.scss'; 



import { CardMedia, Modal } from '@material-ui/core';
import CustomizedTimeline from '../Test';
import LearnMore from './LearnMore';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    minWidth: 270,
    width: 'fit-content',
    margin: '10px',
    background: 'whitesmoke'
  },
  title: {
    fontSize: '20px',
    textTransform: 'capitalize'
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
    opacity: 0.75
  },
}));



export default function ResumeCard(props) {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const { section } = props;

    const  imageToUse = () => {
      switch(section){
        case "professional experience":
          return ProfessionalExperience;
        case "education":
          return Education;
        case "volunteering":
          return Volunteering;
        case "military experience":
          return Military;
      }
    }

    return (
      <div>
          <Card className={classes.root}>
         <CardMedia
          className={classes.media}
          image={imageToUse()}
        />
        <CardContent>
          <Typography className={classes.title}>
            {section}
          </Typography>
        </CardContent>
        <CardActions className='card-btn'>
          <LearnMore 
            className="say-hello-dialog-btn" 
            open={showModal} 
            onClose={()=>setShowModal(false)}
            section={section}/>
        </CardActions>
      </Card>

      </div>
       
      
          
    );
  }
  