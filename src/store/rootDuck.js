import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import * as auth from './ducks/auth.duck'
import * as list from './ducks/list.duck'
export const rootReducer = combineReducers({
  auth: auth.reducer,
  list: list.reducer
});

export function* rootSaga() {
  yield all([auth.saga(), list.saga()]);
}
