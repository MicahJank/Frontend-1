import {
    TICKETS_LOADING,
    TICKETS_SUCCESS,
    TICKETS_FAILURE,
    TICKET_POST_SUCCESS,
    TICKET_PUT_SUCCESS,
} from '../actions';

const initialState = {
    tickets: null,
    isLoading: false,
    error: ""
}

const TicketsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TICKETS_LOADING:
            console.log("Starts to get all tickets");
            return {
                ...state,
                isLoading: true,
            }
        case TICKETS_SUCCESS: 
            console.log("Successfully getting the tickets");
            return {
                ...state,
                tickets: action.payload,
                isLoading: false
            }
        // This case handles post
        case TICKET_POST_SUCCESS:
            console.log("Successfully posted a ticket");
            return {
                ...state,
                tickets: [action.payload, ...state.tickets],
                isLoading: false
            }
        // This case handles put
        case TICKET_PUT_SUCCESS: 
            console.log("Successfully edited a ticket");
            return {
                ...state,
                isLoading: false
            }
        case TICKETS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export default TicketsReducer;