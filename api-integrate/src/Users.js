import React, { useState, useReducer } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState();
  const [state, refetch] = useAsync(getUsers, [], true);


  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>🚨삐용삐용🚨<br /> Users에서 에러발생!!</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map(user => (
            <li
                key={user.id}
                onClick={() => {setUserId(user.id);}}
                style={{ cursor: 'pointer' }}>
                {user.username} ({user.name})
            </li>
        ))}
      </ul>
          <button onClick={refetch}>다시 불러오기</button>
          {userId && <User id={userId} />}
    </>
  );
}

export default Users;