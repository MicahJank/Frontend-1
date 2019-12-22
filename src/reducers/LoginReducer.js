const initialState = {
    studentInfo: [],
    helperInfo: [],
    isLoading: false,
    error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        // Reducer cases for student login
        case STUDENT_LOGIN_LOADING: 
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case STUDENT_LOGIN_SUCCESS: 
            return {
                ...state,
                studentInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case STUDENT_LOGIN_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        // Reducer cases for family login
        case HELPER_LOGIN_LOADING: 
            return {
                ...state, 
                isLoading: true,
                error: ""
            }
        case HELPER_LOGIN_SUCCESS: 
            return {
                ...state,
                helperInfo: action.payload,
                isLoading: false,
                error: ""
            }
        case HELPER_LOGIN_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}