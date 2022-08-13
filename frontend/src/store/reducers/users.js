import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    users: [],
};

const setUsers = (state, action) => {
    return updateObject(state, {
        users: action.users
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            return setUsers(state, action);
        default:
            return state;
    }
};

export default reducer;
