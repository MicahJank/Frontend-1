const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_LOADING: 
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                user: action.payload,
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