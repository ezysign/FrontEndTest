import { LOGIN,LOGIN_LOADING,SET_LOGIN_STATUS } from './../actions/types.js';
import * as cache from './../helpers/cache.js'

const initialState = {
   user:null,
   loading:false,
   success:null,
   login_status:cache.getFromCache()==null?false:true,
};

export default function(state = initialState, action) {
   
 switch (action.type) {
   
    case LOGIN:
    {
        return {
              ...state,
        }
    }

    case LOGIN_LOADING: 
    {
        return {
            ...state,
            loading:action.payload
        }
    }

    case SET_LOGIN_STATUS: 
    {
        
        return {
            ...state,
            login_status:action.payload.status,
        }
    }

    default:
         return state;
    }
}