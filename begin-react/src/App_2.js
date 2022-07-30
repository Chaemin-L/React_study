import React, { useRef, useMemo, useCallback, useReducer } from 'react';
//import Counter from './Counter'
//import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'


function countActiveUsers(user) {
    console.log('활성 사용자 수를 세는 중...!');
    return user.filter(user => user.active).length;
};

const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [
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
    ]
};

function reducer(state, action){
    switch (action.type) {
        case 'CHANGE_INPUT':
            return { ...state, inputs: {...state.inputs, [action.name]: action.value } };
        case 'CREATE_USER':
            return { inputs: initialState.inputs, users: [...state.users, action.user] };
        case 'REMOVE_USER':
            return { ...state, users: state.users.filter(user => user.id !== action.userid)};
        case 'TOGGLE_USER':
            return { ...state, users: state.users.map(user => user.id === action.userid? {...user, active: !user.active}: user) };
        default:
            return state;
    }
}
    
function App() {    
   

    const [state, dispatch] = useReducer(reducer, initialState);
    const { inputs: { username, email }, users } = state;
    const nextId = useRef(4);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value,
        });
    }, []);

    const onCreate = useCallback(e => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            }
        });
        nextId.current+=1;
    }, [username, email]);

    const onRemove = useCallback(userid => {
        dispatch({
            type: 'REMOVE_USER',
            userid,
        });
    }, []);

    const onToggle = useCallback(userid => {
        dispatch({
            type: 'TOGGLE_USER',
            userid,
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;