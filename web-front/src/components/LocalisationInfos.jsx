import React from "react"
import PropTypes from 'prop-types'
import {TextField, MenuItem} from "@material-ui/core";

function LocalisationInfos(props){
    let {emplacement, zone, data} = props

    return(
        <React.Fragment>
            <div className={`col-md-4`}>
                <TextField
                    select
                    label="Zone"
                    size="small"
                    fullWidth
                    {...zone.input}
                >
                    {data.zones.map((item,k) => {
                        return <MenuItem key={k} value={item.Id}>{item.Libelle}</MenuItem>
                    })}
                </TextField>
            </div>
            <div className={`col-md-4`}>
                <TextField
                    select
                    fullWidth
                    label="Emplacement"
                    size="small"
                    {...emplacement.input}
                >
                    {data.emplacements.map((item,k) => {
                        return <MenuItem key={k} value={item.Id}>{item.Libelle}</MenuItem>
                    })}
                </TextField>
            </div>
        </React.Fragment>
    )
}

LocalisationInfos.propTypes = {
    data: PropTypes.shape({
        emplacements: PropTypes.arrayOf(PropTypes.shape({Id: PropTypes.number, Libelle: PropTypes.string})),
        zones: PropTypes.arrayOf(PropTypes.shape({Id: PropTypes.number, Libelle: PropTypes.string})),
    })
}
LocalisationInfos.defaultProps = {
    data: {
        emplacements: [{Id:0, Libelle:"Selectionnez un emplacement SVP"},],
        zones: [{Id:0, Libelle:"Selectionnez une zone SVP"},]
    }
}
export default LocalisationInfos