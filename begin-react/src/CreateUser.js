import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  console.log("createUser rerendering");
    
    return (
        <div>
            <input placeholder="계정명" onChange={onChange} name="username" value={username} />
            <input placeholder="이메일" onChange={onChange} name="email" value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);