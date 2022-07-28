import React from 'react';

export default function GameOver({ onRestart }){
    return (
        <div>
            <h2>Game Over!!</h2>
            <button onClick={onRestart}>다시하기↩</button>
        </div>
    )
}