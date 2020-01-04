import {
    TICKETS_LOADING,
    TICKETS_SUCCESS,
    TICKETS_FAILURE,
    TICKET_POST_SUCCESS,
    TICKET_PUT_SUCCESS,
    TICKET_DELETE_SUCCESS
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
        // This case handles GET
        case TICKETS_SUCCESS: 
            console.log("Successfully getting the tickets");
            return {
                ...state,
                tickets: action.payload,
                isLoading: false
            }
        // This case handles POST
        case TICKET_POST_SUCCESS:
            console.log("Successfully posted a ticket");
            return {
                ...state,
                tickets: [action.payload, ...state.tickets],
                isLoading: false
            }
        // This case handles PUT
        case TICKET_PUT_SUCCESS: 
            console.log("Successfully edited a ticket");
            return {
                ...state,
                tickets: state.tickets.map(ticket => {
                    return ticket.id === action.payload.id ? action.payload : ticket;
                }),
                isLoading: false
            }
        // This case handles DELETE
        case TICKET_DELETE_SUCCESS:
            console.log("Successfully deleted a ticket");
            return {
                ...state,
                tickets: state.tickets.filter(ticket => Number(action.payload) !== ticket.id),
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