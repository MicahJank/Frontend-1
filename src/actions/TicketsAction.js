import axiosWithAuth from '../utils/axiosWithAuth';

export const TICKETS_LOADING = 'TICKETS_LOADING';
export const TICKETS_SUCCESS = 'TICKETS_SUCCESS';
export const TICKETS_FAILURE = 'TICKETS_FAILURE';
export const TICKET_POST_SUCCESS = 'TICKET_POST_SUCCESS'

export const getTickets = () => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("Reaching tickets action")
    axiosWithAuth()
        .get("/tickets")
        .then(res => {
            console.log("Getting response data", res.data);
            dispatch({ type: TICKETS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data })
        })
}

export const postTicket = (ticket, redirect) => dispatch => {
    dispatch({ type: TICKETS_LOADING });
    console.log("Reaching tickets action")
    axiosWithAuth()
        .post("/tickets", ticket)
        .then(res => {
            console.log("Getting back from server after posting a ticket", res);
            dispatch({ type: TICKET_POST_SUCCESS, payload: res.data });
            redirect();
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: TICKETS_FAILURE, payload: err.data })
        })
}