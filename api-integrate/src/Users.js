import React, { useState } from 'react';
import axios from 'axios';
// import useAsync from './useAsync';
import { useAsync } from 'react-async';
import User from './User';

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState(null);

    const { isLoading, data: users, error, run } = useAsync({ deferFn: getUsers, }); // state.data 를 users 키워드로 조회
    console.log(isLoading, users, error, run);

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>🚨삐용삐용🚨<br /> Users에서 에러발생!!</div>;
  if (!users) return <button onClick={run}>불러오기</button>;
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
          <button onClick={run}>다시 불러오기</button>
          {userId && <User id={userId} />}
    </>
  );
}

export default Users;