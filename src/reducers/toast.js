import { SET_TOAST } from './../actions/types.js';

const initialState = {
  message:null
};

export default function(state = initialState, action) {
   
 switch (action.type) {
   
    case SET_TOAST:
    {
        return {
              ...state,
              message:action.payload
        }
    }

    

    default:
         return state;
    }
}