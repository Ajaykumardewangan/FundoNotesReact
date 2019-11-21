import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextareaAutosize } from '@material-ui/core';
import Property from '../pages/properties';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div>
              <input style={{border:'none',outline:'none',width:'350px'}} type="text" placeholder='title'/>
           </div>
          </DialogContentText>
          <div>
              <TextareaAutosize style={{width:'350px',marginTop:'10px',border:'none', outline:'none'}} 
              placeholder='description'/>
            </div>
        </DialogContent>
        <DialogActions> 
            <div>
        <Property/>
        </div>
        <div>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          </div>
        </DialogActions>
       
      </Dialog>
     
    </div>
  );
}