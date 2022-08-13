import axios from "axios";
import * as actionTypes from "./actionTypes";
import { HOST_URL } from "../../settings";


export const getUsersSuccess = users => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        users: users
    }
}

export const getUsers = (username, token) => {
    return dispatch => {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        };
        axios
            .get(`${HOST_URL}/chat/users/?username=${username}`)
            .then(res => {
                dispatch(getUsersSuccess(res.data))
            });
    };
};
