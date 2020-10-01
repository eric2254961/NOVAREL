import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";

function Search(props){
    const [searchText, setSearchText] = useState("")
    const history = useHistory();
    const handleSearch = (event) => {
        console.log(searchText)
        event.preventDefault();
        history.push(`/commercial/client/recherche?s=${searchText}`)
    }

    return (
        <form onSubmit={handleSearch} className="navbar-form col-md-10">
            <div className="col-md-10">
                <div className="input-group no-border col-md-10">
                    <input type="text" value={searchText}
                           className="form-control col-md-12"
                           placeholder="Rechercher par nom du client ou numéro de badge"
                           onChange={(event) => {setSearchText(event.target.value)}}
                    />
                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container"></div>
                    </button>
                </div>
            </div>

        </form>
    )
}

export default Search

