import React from 'react';

function Record({ guess }) {
    return(
        <div>
            {guess.input},
            {guess.strike!==0 && <span>{guess.strike}스트라이크 </span>}
            {guess.ball!==0 && <span>{guess.ball}볼 </span>}
            {guess.out!==0 && <span>{guess.out}아웃 </span>}
        </div>
    )
}

export default function RecordList({guessList}) {
    return (
        <div>
            {guessList.map(guess => <Record guess={guess} />)}
        </div>
    )
}
