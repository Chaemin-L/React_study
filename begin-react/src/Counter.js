import React, {useReducer} from 'react';

function Counter() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREASE':
                return state + 1;
            case 'DECREASE':
                return state - 1;
            default:
                return state;
        }
    }
    const [counter, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => { dispatch({ type: 'INCREASE' }); }
    const onDecrease = () => { dispatch({ type: 'DECREASE'}); }

    return (
        <div>
            <h2> Counter: {counter} </h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;