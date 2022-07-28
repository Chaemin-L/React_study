import React from 'react';

export default function InputForm({onChange, onGuess}) {
    return (
        <div>
            <input placeholder="세자리 수 입력" onChange={onChange}  required/>
            <button onClick={onGuess}>추리하기</button>
        </div>
    )
}