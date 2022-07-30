import React, {useEffect} from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  /* useEffect 
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  
    useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  useEffect(() => { 
    console.log(user);
  });
  */
  
  return (
    <div>
      <b style={{
          cursor: 'pointer',
        color: user.active ? 'green' : 'black'
        }} onClick={() => onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
})

function UserList({ users, onRemove, onToggle }) {
  console.log("userlist rerendering");
  return (
    <div>
      {users.map((user) => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />)}
    </div>
  );
}

export default React.memo(UserList);