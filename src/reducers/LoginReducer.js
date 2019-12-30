import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions'

const initialState = {
    userInfo: [],
    userType: localStorage.getItem("user_identity") || "",
    isLoading: false,
    error: null
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_LOADING: 
            console.log("Login starting.")
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case LOGIN_SUCCESS: 
            console.log("Login successful.")
            return {
                ...state,
                userInfo: action.payload.user,
                userType: action.payload.user.role,
                isLoading: false,
                error: ""
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default LoginReducer;