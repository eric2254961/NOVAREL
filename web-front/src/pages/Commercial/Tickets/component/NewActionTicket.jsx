import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'

function ActionTicket (props){

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className="stats" color="primary" onClick={handleClickOpen}>       
        <i className="material-icons text-info">chat</i>
        <a className="text-info" href="#1">Traiter</a> 
      </Button>
      <Dialog
        open={open}
        keepMounted
        fullWidth
        maxWidth={'sm'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      <DialogTitle id="alert-dialog-slide-title">+ Nouvelle action</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default ActionTicket