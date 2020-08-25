import { put, takeLatest } from "redux-saga/effects";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import http from "../../utils/httpInstance";


// action types
export const LOGIN = "LOGIN";
export const AUTH_START = "AUTH_START"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAIL = "AUTH_FAIL"



const DEFAULT_STATE = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null
};
export const reducer = persistReducer(
  { storage, key: "test" },
  (state = DEFAULT_STATE, action) => {
    switch (action.type) {

      case AUTH_START:
        return { ...state, loading: true, isAuthenticated: false };
      case AUTH_SUCCESS:
        return {
          ...state, token: action.token,
          error: null,
          isAuthenticated: true,
          loading: false
        };
      case AUTH_FAIL:
        return { ...state, loading: false, error: action.error };

      default:
        return state;
    }
  }
);

export default reducer;

// Actions
export const actions = {
  login: data => ({ type: LOGIN, payload: data }),
  authStart: () => ({ type: AUTH_START }),
  authSuccess: (token) => ({ type: AUTH_SUCCESS, payload: { token } })
};


//saga
export function* saga() {
  yield takeLatest(LOGIN, function* loginSaga(action) {
    yield put(actions.authStart());
    try {

      const { data: { token } } = yield http({
        method: "POST",
        url: "/api/login",
        data: action.payload
      });
      yield put(actions.authSuccess(token));

    } catch (error) {
      console.log(error);
    }
  });


}


