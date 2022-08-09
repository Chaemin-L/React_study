import React, {useEffect} from 'react';
//import axios from 'axios';
//import useAsync from './useAsync';
//import { useAsync } from 'react-async';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';


export default function User({id}) {
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
      getUser(dispatch, id);
    }, [dispatch, id]);

    const { loading, error, data: user } = state.user;

    if (loading) return <div>로딩중...</div>
    if (error) return <div>🚨삐용삐용🚨<br />User에서 에러발생!!</div>
    if (!user) return null;
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    )
}