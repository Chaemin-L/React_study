import axios from 'axios';
import React, {useReducer, useEffect} from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: false,
            }
        case 'LOADING': 
            return {
                loading: true,
                data: null,
                error: false,
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error('Unhandled action type: ' + action.type);
    }
}


export default function useAsync(callback, deps = [], skip=false) {
    const [state, dispatch] = useReducer(reducer, { loading: false, data: null, error: false });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data: data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    }

    useEffect(() => {
        if (skip) return;
        fetchData();
    // eslint-disable-next-line
    }, deps);

    return [state, fetchData]
}

