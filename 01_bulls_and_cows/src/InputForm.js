import React from 'react';
import Button from './component/Button';

export default function InputForm({ onChange, onGuess }) {
  console.log('InputForm Component rendering');
    
    return (
        <div>
            <input placeholder="서로 다른 세 개의 수 입력" maxLength={3} onChange={onChange}  required/>
            <Button onClick={onGuess}>💡</Button>
        </div>
    )
}