import LoadingBar from "../components/Loading";

export const LOAD_SHOW = "LOAD_SHOW";
export const LOAD_HIDE = "LOAD_HIDE";

const initialState = true;
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_SHOW :
            return true
        case LOAD_HIDE :
            return false
        default :
            return state
    }
}

const LoadingBarRx = {
    EventShow : LOAD_SHOW,
    EventHide : LOAD_HIDE,
    reducer: reducer
}

export default LoadingBarRx