import React, {useRef, useContext} from 'react';
import {UserDispatch} from './App_2';
import useInputs from './hooks/useInputs';

function CreateUser() {
    console.log("createUser rerendering");
    const dispatch = useContext(UserDispatch);
    const [{username, email}, onChange, reset] = useInputs({ username: '', email: '' });
    const nextId = useRef(4);

    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            }
        });
        nextId.current++;
        reset();
    }
    
    return (
        <div>
            <input placeholder="계정명" onChange={onChange} name="username" value={username} />
            <input placeholder="이메일" onChange={onChange} name="email" value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);