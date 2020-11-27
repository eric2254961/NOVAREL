const AUTH_LOGIN = "AUTH_LOGIN";

export function handleLogin(userDto){
  console.log("User login", userDto)
  return dispatch => {
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        ...userDto, 
        isConnected: true
      }
    })
  }
}

const initialState = { Id: 0, Name: "", Email: "@", isConnected: false  };
export const reducer = (state = initialState, action) => {
  switch(action.type){
    case AUTH_LOGIN :
      return action.payload
    default :
      return state
  }
}

const Auth = {
  handleLogin : handleLogin,
  reducer: reducer
}

export default Auth;