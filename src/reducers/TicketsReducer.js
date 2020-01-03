import {
    TICKETS_LOADING,
    TICKETS_SUCCESS,
    TICKETS_FAILURE,
    TICKET_POST_SUCCESS
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
        // This case handles post, put
        case TICKET_POST_SUCCESS:
            console.log("Successfully posted a ticket");
            return {
                ...state,
                tickets: [...state.tickets, action.payload],
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