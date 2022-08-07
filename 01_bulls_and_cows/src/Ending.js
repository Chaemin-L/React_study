import React from 'react';
import Button from './component/Button';

export default function Ending({ msg, onRestart }) {
  console.log('Ending Component rendering');
    return (
        <div>
            <h2>{msg}</h2>
            <Button onClick={onRestart}>다시하기↩</Button>
        </div>
    )
}