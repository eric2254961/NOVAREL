import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useEffect } from 'react'

function HistoriqueDialog(props){
  let { abonnementId, getHistorique, historiques } = props
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getHistorique(abonnementId)
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="primary" onClick={handleClickOpen}> Historique </Button>
      <Dialog
        open={open}
        keepMounted
        fullWidth
        maxWidth={'lg'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      <DialogTitle id="alert-dialog-slide-title">Historique client</DialogTitle>
        <DialogContent>
          <table className="table">
            <thead>
            <tr>
              <td width="4%" align="center"><b>Site</b></td>
              <td width="7%" align="center"><b>Voie(X/S)</b></td>
              <td width="20%" align="center"><b>Nom</b></td>
              <td width="17%" align="center"><b>Date</b></td>
              <td width="20%" align="center"><b>Opération</b></td>
              <td width="8%" align="center"><b>Montant (*)</b></td>
              <td width="8%" align="center"><b>Bal Var.</b></td>
              <td width="8%" align="center"><b>Balance Avant</b></td>
              <td width="8%" align="center"><b>Badge</b></td>
            </tr>
            </thead>
            <tbody>
            {historiques.map( (item, k) => {
              return (
              <tr key={k}>
                <td>{ item.PLAZA }</td>
                <td>{ item.LANE }</td>
                <td>{ item.PLAZA }</td>
                <td>{ item.DHMS }</td>
                <td>{ item.OPERATION }</td>
                <td className="amount">{ item.AMOUNT }</td>
                <td className="amount">{ item.BALANCE }</td>
                <td className="amount">{ item.BALANCE_BEFORE }</td>
                <td>{ item.MEDIA }</td>
              </tr> )
            })}
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
      </React.Fragment>
  )
}

export default HistoriqueDialog