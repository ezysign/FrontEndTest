import { SET_USER, SET_USER_ERROR, LOGOUT_USER } from "../constants";

const initialState = {
    user: null,
    error: false
}


export const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER:
            return Object.assign({}, state, { user: action.payload, error: false })

        case SET_USER_ERROR:
            return Object.assign({}, state, { user: null, error: true })

        case LOGOUT_USER:
            return Object.assign({}, state, { user: null, error: false })

        default:
            return state;

    }

}