import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions'

const initialState = {
    userInfo: [],
    isLoading: false,
    error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        // Reducer cases for student login
        case LOGIN_LOADING: 
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                userInfo: action.payload,
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