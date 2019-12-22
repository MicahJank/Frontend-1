import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions'

const initialState = {
    userInfo: null,
    isLoading: false,
    error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_LOADING: 
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: ""
            }
        case REGISTER_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}