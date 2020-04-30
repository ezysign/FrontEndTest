import { LIST_LOADING,SET_LIST } from './../actions/types.js';


const initialState = {
  data:null,
  page:1,
  total_pages:0,
  loading:false,
};

export default function(state = initialState, action) {
   
 switch (action.type) {
   
    case SET_LIST:
    {
        return {
              ...state,
              data:action.payload.data,
              page:action.payload.page,
              total_pages:action.payload.total_pages,
        }
    }
    case LIST_LOADING:
      {
          return {
                ...state,
                loading:action.payload,
          }
      }


  

    default:
         return state;
    }
}