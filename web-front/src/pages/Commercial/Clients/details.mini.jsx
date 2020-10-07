import React from "react";
import PropTypes, {object} from "prop-types"
function DetailsMiniCLient(props){
    const { client } = props
    console.log("details", client)
    return (
        <React.Fragment>
        {client && <div className="card card-profile">
            <div className="card-body">
                <h6 className="card-category text-gray">Informations client</h6>
                <h4 className="card-title">{client.NAME} {client.FNAME} {client.CNAME} </h4>
                <p className="card-description">
                    Don't be scared of the truth because we need to restart the human foundation in
                    truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
                    the back is...
                </p>
                <a href="javascript:;" className="btn btn-primary btn-round">Follow</a>
            </div>
        </div>}
        </React.Fragment>
    )
}

DetailsMiniCLient.propTypes = {
    client: PropTypes.object.isRequired
}

export default DetailsMiniCLient