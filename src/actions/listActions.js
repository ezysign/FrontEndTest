import {
    LIST_LOADING,SET_LIST
 } from './types.js';
 import { getData } from './../helpers/server.js';
 
export const fetchListAction = (payload) => async  dispatch => {
    dispatch({
        type: LIST_LOADING,
        payload: true
     });

    var query="";
    if (payload.page>1)
    {
        query+="?page="+payload.page;
    }

    let response=await getData('users'+query);

   
    dispatch({
        type: SET_LIST,
        payload: response.data
     });

     dispatch({
        type: LIST_LOADING,
        payload: false
     });
    
};
 

 