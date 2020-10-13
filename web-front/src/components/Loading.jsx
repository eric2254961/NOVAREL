import React from "react";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const CustomProgressbar = withStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#ff760b',
    },
    colorPrimary: {
        backgroundColor: '#ffe8c1',
    },

}))(LinearProgress);

function LoadingBar(props){
    return (props.show && <CustomProgressbar />)
}

LoadingBar.propTypes = {
    show : PropTypes.bool
}

LoadingBar.defaultProps = {
    show: true
}

const mapStateToProps = store => {
    return {
        show: store.showLoadingBar
    }
}
export default connect(mapStateToProps) (LoadingBar)