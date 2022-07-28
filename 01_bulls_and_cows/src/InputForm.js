import React from 'react';

export default function InputForm({onChange, onGuess}) {
    return (
        <div>
            <input placeholder="서로 다른 세 개의 수 입력" onChange={onChange}  required/>
            <button onClick={onGuess}>추리하기</button>
        </div>
    )
}