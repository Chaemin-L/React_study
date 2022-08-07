import React, {useState, useRef, useReducer, useEffect, useCallback} from 'react';
import Header from './Header';
import InputForm from './InputForm';
import Ending from './Ending';
import RecordList from './RecordList';
import './style/App.scss';
import reducer from './reducer';

// 숫자 개수
const OPTION = 3;

// 서로 다른 세 개의 숫자 배열 return
const createRandom = () => {
  const numList = [];
  while (true) {
    if (numList.length === OPTION) {
      break;
    }
    const num = String(Math.floor(Math.random() * 9));
    if (numList.indexOf(num) === -1) {
      numList.push(num);
    }
  }
  return numList;
}

const initialValue = {
  answer: createRandom(),
  guessList: [],
  input: null,
  caution: false,
  isOver: { status: false, msg: "Game Over!!" },
}


function App() {
  let nextId = useRef(0);
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { isOver: {status, msg}, caution, guessList } = state;

  const onChange = useCallback((e) => {
    dispatch({ type: 'CHANGE', value: e.target.value });
  })

  const onGuess = useCallback(() => {
    dispatch({ type: 'GUESS', option: OPTION, id: nextId.current++ });
  })

  const onRestart = useCallback(() => dispatch({ type: 'RESTART', initialValue: initialValue }));

  return (
    <div className="App">
      <Header />
      {!status && <><InputForm onChange={onChange} onGuess={onGuess} /><RecordList guessList={guessList} /></>}
      { caution && <div> 세 개의 서로 다른 숫자를 올바르게 입력해주세요!</div>}
      {status && <Ending msg={msg} onRestart={onRestart} />}
    </div>
  );
}

export default App;