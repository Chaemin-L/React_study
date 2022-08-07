import React from 'react';

const Record = React.memo(function ({ guess }) {
    console.log('Record Component rendering');
    return (
        <div>
            {guess.input},
            {guess.strike !== 0 && <span>{guess.strike}스트라이크 </span>}
            {guess.ball !== 0 && <span>{guess.ball}볼 </span>}
            {guess.out !== 0 && <span>{guess.out}아웃 </span>}
        </div>
    )
});

function RecordList({ guessList }) {
    console.log('RecordList Component rendering');
    return (
        <div>
            {guessList.map(guess => <Record key={guess.id} guess={guess} />)}
        </div>
    )
}

export default React.memo(RecordList);