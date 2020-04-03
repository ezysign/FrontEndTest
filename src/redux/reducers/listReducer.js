import { SET_DATA_LOADIND, SET_DATA_RESULT, SET_DATA_ERROR } from "../constants";

const initialState = {
    loading: true,
    data: [],
    error: ''

}

export const listReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DATA_LOADIND:
            return Object.assign({}, state, { loading: true, data: [], error: '' })

        case SET_DATA_RESULT:
            return Object.assign({}, state, { loading: false, data: action.payload, error: '' })

        case SET_DATA_ERROR:
            return Object.assign({}, state, { loading: false, data: [], error: 'Error on Fetching Resource' })

        default:
            return state;
    }

} 