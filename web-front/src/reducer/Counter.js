import ActionType from '../reducer/ActionType'

let actionType = new ActionType("COUNT");

export function count() {
    return dispatch => {
        dispatch({
            type: this.STARTING,
            payload: null
        });

        dispatch({
            type: this.STARTED,
            payload: { step : 1 }
        });

        dispatch({
            type: this.FINISH,
            payload: null
        });
    };
};


const initialState = { count: 0 };
export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionType.STARTING:
            console.log("Count starting...");
            break;
        case actionType.STARTED:
            return { count: state.count + action.payload.step };
        case actionType.FINISH:
            console.log("Count finish...");
            break;
        default:
            return state;
    }
};

const counter = {
    count: count,
    reducer: reducer
}

export default counter;


