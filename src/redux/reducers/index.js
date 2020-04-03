import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { listReducer } from "./listReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    data: listReducer
})