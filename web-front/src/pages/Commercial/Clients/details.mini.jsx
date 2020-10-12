import React, {useState} from "react";
import PropTypes, {object} from "prop-types"
import {TextField, MenuItem} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function DetailsMiniCLient(props){
    const { client } = props

    const [ indexAbonnement, setIndexAbonnement ] = useState(0)
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '90%',
            },
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
        {client && <div className="card card-profile">
            <div className="card-body">
                <h6 className="card-category text-gray">Client</h6>
                <h4 className="card-title">{client.NAME} {client.FNAME} {client.CNAME} </h4>
                <p className="card-description">
                    <span className="text-left">{client.TYPE === "1" ? "Entreprise" : "Particulier"}</span>
                    <br/>
                    <span className="text-left">{client.PHONE_1} / {client.PHONE_2}</span>
                </p>
            </div>
        </div>}

        {client && <div className="card card-profile">
            <div className="card-body">
                <h4 className="card-title">Abonnements</h4>
                <div className={`${classes.root} form-group`}>
                    <TextField
                        onChange={(event) => {setIndexAbonnement(event.target.value)} }
                        select
                        defaultValue={0}
                    >
                        {[client.SUBSCRIPTIONS,{...client.SUBSCRIPTIONS, SUBS_ID: "123423224223"}].map((item,k) => {
                            return <MenuItem key={k} value={k}>{item.SUBS_ID}</MenuItem>
                        })}
                    </TextField>
                </div>
                <p className="text-left">Statut : <b>{[client.SUBSCRIPTIONS,{...client.SUBSCRIPTIONS, SUBS_ID: "123423224223", SOLDE: 14000}][indexAbonnement].STATUS === "1" ? "Actif" : "Non actif (Voir POS GEA"}</b></p>
                <p className="text-left">Solde : <b>{[client.SUBSCRIPTIONS,{...client.SUBSCRIPTIONS, SUBS_ID: "123423224223", SOLDE: 14000}][indexAbonnement].SOLDE}</b> Fcfa</p>
            </div>
        </div>}

        {client && <div className="card card-profile">
            <div className="card-body">
                <h4 className="card-title">Badges</h4>
                {indexAbonnement}
            </div>
        </div>}
        </React.Fragment>
    )
}

DetailsMiniCLient.propTypes = {
    client: PropTypes.object
}

export default DetailsMiniCLient