import React, { useState } from "react"
import PropTypes from 'prop-types'
import {TextField, MenuItem} from "@material-ui/core";

function LocalisationInfos(props){
    let { emplacement, zone, data } = props
    let [_emplacements, setEmplacements] = useState(data.Emplacements)

    const handleZoneChange = (id) =>{
        let Emplacements = []
        data.Emplacements.map(i => {
            if(i.Zone.Id === id){
                Emplacements.push(i)
            }
        })
        setEmplacements(Emplacements)
        //console.log("Emplacement for ID", id, {Emplacements: Emplacements},data.Emplacements)
    }

    return(
        <React.Fragment>
            <div className="col-md-4">
                <TextField
                    select
                    label="Zone"
                    fullWidth
                    {...zone.input}
                    onChange={(e) => {
                        handleZoneChange(e.target.value)
                        zone.input.onChange(e)
                    }}
                >
                    {data.Zones.map((item,k) => {
                        return <MenuItem key={k} value={item.Id}>{item.Libelle}</MenuItem>
                    })}
                </TextField>
            </div>
            <div className="col-md-4">
                <TextField
                    select
                    fullWidth
                    label="Emplacement"
                    {...emplacement.input}
                >
                    {_emplacements.map((item,k) => {
                        return <MenuItem key={k} value={item.Id}>{item.Libelle}</MenuItem>
                    })}
                </TextField>
            </div>
        </React.Fragment>
    )
}

LocalisationInfos.propTypes = {
    data: PropTypes.shape({
        Emplacements: PropTypes.arrayOf(PropTypes.shape({Id: PropTypes.number, Libelle: PropTypes.string})),
        Zones: PropTypes.arrayOf(PropTypes.shape({Id: PropTypes.number, Libelle: PropTypes.string})),
    })
}
LocalisationInfos.defaultProps = {
    data: {
        Emplacements: [{Id:0, Libelle:"Selectionnez un emplacement SVP"},],
        Zones: [{Id:0, Libelle:"Selectionnez une zone SVP"},]
    }
}
export default LocalisationInfos