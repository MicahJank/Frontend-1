import {

    HELPER_REOPEN_SUCCESS,
    HELPER_PUT_SUCCESS,
    HELPER_ACCEPT_SUCCESS
} from '../actions';

const initialState = {
    tickets:[]
};

const HelperReducer = (state, action) => {
    switch(action.type) {
        case HELPER_PUT_SUCCESS:
            console.log("Start Helper Put");
            return {
                ...state,
                tickets: state.tickets.map(ticket => {
                    return ticket.id === action.payload.id ? action.payload : ticket;
                }),
                isLoading: false
            }
            // case HELPER_REOPEN_SUCCESS:
            //     return {

            //     }
            //     case HELPER_ACCEPT_SUCCESS:
            //         return {

            //         }
    }
}

export { initialState, HelperReducer };