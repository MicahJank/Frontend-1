import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (userLogin) => dispatch => {
    console.log('Reached userLogin function');
    dispatch({ type: LOGIN_LOADING });
    console.log('Something is happening');
    axiosWithAuth()
        .post("/auth/login", userLogin)
        .then(res => {
            console.log('Logging in in progress', res.data);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            console.log('Error at logging in', err.data);
            dispatch({ type: LOGIN_FAILURE, pyaload: err.data });
        })
}