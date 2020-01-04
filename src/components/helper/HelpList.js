import React, { useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const HelperList = () => {
    useEffect(() => {
        axiosWithAuth()
        .get("/tickets")
        .then(res => {
            console.log("Getting response data", res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return(
        <div>
            <h2>Welcome to random places</h2>
        </div>
    )
}

export default HelperList;