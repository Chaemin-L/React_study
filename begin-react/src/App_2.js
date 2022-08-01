import React, { useRef, useMemo, useCallback, useReducer } from 'react';
//import Counter from './Counter'
//import InputSample from './InputSample'
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';


function countActiveUsers(user) {
    console.log('활성 사용자 수를 세는 중...!');
    return user.filter(user => user.active).length;
};

const initialState = {
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
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.userid);
                draft.users.splice(index, 1);

            });
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.userid);
                user.active = !user.active;
            });
        default:
            return state;
    }
}

export const UserDispatch = React.createContext(null);
    
function App() {    
   
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users}/>
            <div>활성 사용자 수: {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;