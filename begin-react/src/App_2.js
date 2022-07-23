import React, { useState, useRef } from 'react';
//import Counter from './Counter'
//import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {
    const [inputs, setInputs] = useState({ username: '', email: '' });
    const { username, email } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

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
    
    const nextId = useRef(4);
    //const nextId = { current: 4 };
    const onCreate = () => {
        // 배열에 새로운 요소 추가 로직
        const item = {
            ...inputs,
            id: nextId.current,
        }
        setUsers([ ...users, item ]);
        nextId.current += 1;
        console.log(nextId.current)
    }

    const onRemove = targetId => {
        const updateUsers = users.filter((user) => user.id !== targetId);
        console.log(updateUsers);
        setUsers(updateUsers);
    };

    const onToggle = id => {
        setUsers(
            users.map(
                user => (user.id === id) ? { ...user, active: !user.active } : user
            )
        );
    }
    return (
        <div>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
}

export default App;