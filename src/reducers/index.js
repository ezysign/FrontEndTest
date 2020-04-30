import { combineReducers } from 'redux'
import auth from './auth'
import toast from './toast'
import list from './list'
export default combineReducers({
    auth,
    toast,
    list
})