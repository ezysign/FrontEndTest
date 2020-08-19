import history from "../../utils/history";
import { put, takeLatest, takeEvery } from "redux-saga/effects";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import http from "../../utils/httpInstance";


// action types
export const LIST_GET = "LIST_GET";
export const LIST_START = "AUTH_START"
export const LIST_SUCCESS = "AUTH_SUCCESS"
export const LIST_FAIL = "AUTH_FAIL"



const DEFAULT_STATE = {
    data: [],
    loading: false,
    error: null
};
export const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LIST_START:
            return { ...state, loading: true, data: null, error: null };
        case LIST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false
            };
        case LIST_FAIL:
            return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
}


export default reducer;

// Actions
export const actions = {
    get_list: () => ({ type: LIST_GET }),
    Start: () => ({ type: LIST_START }),
    Success: (data) => ({ type: LIST_SUCCESS, payload: { data } }),
    Fail: (error) => ({ type: LIST_FAIL, payload: error })
};


//saga
export function* saga() {
    yield takeLatest(LIST_GET, function* listSaga() {
        try {
            const { data } = yield http({
                method: "GET",
                url: "/api/users",
                data: null
            });
            yield put(actions.Success(data))
        } catch (error) {
            yield put(actions.Fail(error))
        }

    });


}

