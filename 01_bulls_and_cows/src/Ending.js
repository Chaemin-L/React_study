import React from 'react';

export default function Ending({ msg, onRestart }){
    return (
        <div>
            <h2>{msg}</h2>
            <button onClick={onRestart}>다시하기↩</button>
        </div>
    )
}