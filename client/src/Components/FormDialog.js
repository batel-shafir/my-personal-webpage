import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [messageValue, setMessageValue] = React.useState('');

  function sendMeEmail (name, email, message){

  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSend () {
    setOpen(false);
    const form = await axios.post('/api/form', {
      nameValue,
      emailValue,
      messageValue
    });
  };

  

  
  return (
    <div>
      <Button className="say-hello-btn" variant="outlined" onClick={handleClickOpen}>
        say hello
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
             onChange={(e) => setNameValue(e.target.value)}
            margin="dense"
            id="name"
            label="Full Name"
            fullWidth
          />
            <TextField
             onChange={(e) => setEmailValue(e.target.value)}
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            />
            <TextField
            onChange={(e) => setMessageValue(e.target.value)}
            margin="dense"
            id="notes"
            label="Message"
            fullWidth
            multiline

            />
    
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
