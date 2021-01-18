import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import MultilineField from '../../../../components/form/Multiline';
import { Field, reduxForm } from 'redux-form';
import TicketRx from '../../../../reducer/Ticket';
import { connect } from 'react-redux';
import UploadField from '../../../../components/form/Upload';

function ActionTicket (props){
  const {reference} = props
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitCallback = () => {
    setOpen(false);
    props.getActionList(reference);
  }
  
  const initialValue = {reference: reference}
  return (
    <React.Fragment>
      <Button 
        variant="contained"
        color="primary"
        endIcon={<Icon>chat</Icon>}
        onClick={handleClickOpen}
      > Traiter </Button>

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
        <DialogContent>
          <ActionForm
            initialValues={initialValue} 
            onSubmit={props.addNewAction}
            onSubmitSuccess={submitCallback}
            />
          </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

function ActionForm (props){
  let {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <hr/>
      <h4>Commentaire</h4>
      <div className="row">
        <div className="col-md-12">
          <Field component="input" name="reference" type="hidden" /> 
          <Field component={MultilineField} name="commentaire" placeholder="Saisir un commentaire sur l'action SVP" />
        </div>
      </div>
      <Field name="files" component={UploadField} type="file" normalize={ value => console.log(value)}/>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<Icon>send</Icon>}
      >
        Valider
      </Button>
    </form>
  )
}
ActionForm.propTypes={
  handleSubmit: PropTypes.func.isRequired
}
ActionForm = reduxForm({
  form: 'newAction'
})(ActionForm)

const addNewAction = TicketRx.addAction
const getActionList = TicketRx.getActions
const mapDispatchToProps = {
  addNewAction, getActionList
}

export default connect(undefined, mapDispatchToProps) (ActionTicket)