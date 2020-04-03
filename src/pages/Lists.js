import React, { useEffect } from 'react'
import { MasterLayout, Card } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { SET_DATA_RESULT, SET_DATA_LOADIND, SET_DATA_ERROR } from '../redux/constants';

const Lists = () => {

    const { loading, data, error } = useSelector(state => state.data)
    const token = Axios.CancelToken.source();
    const dispatch = useDispatch()


    const fetchData = () => {
        dispatch({ type: SET_DATA_LOADIND })
        Axios.get('https://reqres.in/api/unknown', { token: token.token }).then(({ data }) => {
            dispatch({ type: SET_DATA_RESULT, payload: data.data })
        }).catch(e => dispatch({ type: SET_DATA_ERROR }))
    }

    useEffect(() => {
        fetchData()
    }, []);


    if (error.trim() !== '') {
        return (
            <MasterLayout>
                <p className="text-center">{error}</p>
            </MasterLayout>
        )
    }

    return (
        <MasterLayout>
            {
                loading ? <p>Loading...</p> : <Card data={data} />
            }

        </MasterLayout>
    )
}


export default Lists;