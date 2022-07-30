import React, { useState, useRef, useMemo, useCallback } from 'react';
//import Counter from './Counter'
//import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'


function countActiveUsers(user) {
    console.log('활성 사용자 수를 세는 중...!');
    return user.filter(user => user.active).length;
};

function App() {    
    const [inputs, setInputs] = useState({ username: '', email: '' });
    const { username, email } = inputs;
    //const [count, setCount] = useState(0);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }, [inputs]);

    const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
            email: 'public.velopert@gmail.com',
          active: true,
          
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false,
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false,
        }
    ]);
    /*
    useEffect(() => {
        setCount(countActiveUsers(users));
    }, [users])
    */
    const nextId = useRef(4);
    //const nextId = { current: 4 };
    const onCreate = useCallback(() => {
        // 배열에 새로운 요소 추가 로직
        const item = {
            ...inputs,
            id: nextId.current,
        }
        setUsers([...users, item]);
        nextId.current += 1;
        console.log(nextId.current)
    }, [inputs, users, nextId]);

    const onRemove = useCallback(targetId => {
        const updateUsers = users.filter((user) => user.id !== targetId);
        console.log(updateUsers);
        setUsers(updateUsers);
    }, [users]);

    const onToggle = useCallback(id => {
        setUsers(
            users.map(
                user => (user.id === id) ? { ...user, active: !user.active } : user
            )
        );
    }, [users]);

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <div>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: { count }</div>
        </div>
    );
}

export default App;