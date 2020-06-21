import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import WorkHistoryContent from '../ResumeContent/WorkHistoryContent';
import EducationContent from '../ResumeContent/EducationContent';
import MilitaryContent from '../ResumeContent/MilitaryContent';
import VolunteeringContent from '../ResumeContent/VolunteeringContent';

import CloseIcon from '@material-ui/icons/Close';



export default function LearnMore(props) {
  const [open, setOpen] = useState(false);
  const {isMobileView, section} = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getContentBySection = () => {
    switch(section){
      case "professional experience":
        return <WorkHistoryContent/>
      case "education":
        return <EducationContent/>
      case "volunteering":
        return <VolunteeringContent/>
      case "military experience":
        return <MilitaryContent/>
    }
  }

  return (
    <div>
      <Button className="learn-more-btn" variant="outlined" size={isMobileView? "small" : "medium" } onClick={handleClickOpen}>
        learn more
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <CloseIcon className="close-icon" onClick={handleClose}/>
        </DialogActions>
        <DialogContent>
         {getContentBySection()}
         </DialogContent>
      </Dialog>
    </div>
  );
}
