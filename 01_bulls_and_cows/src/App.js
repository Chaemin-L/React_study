import React, {useState} from 'react';
import Header from './Header';
import InputForm from './InputForm';
import Ending from './Ending';
import RecordList from './RecordList';

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

function App() {
  const [answer, setAnswer] = useState(createRandom());
  const [guessList, setList] = useState([]);
  const [input, setInput] = useState();
  const [isOver, setIsOver] = useState({status: 0, msg: "Game Over!!"});
  const onChange = e => {
    setInput(e.target.value);
  };

  const onGuess = () => {
    console.log(answer);
    let strike = 0; let ball = 0;
    // Strike, Ball, Out Algorithm
    for (let i = 0; i < OPTION; i++) {
      for (let a = 0; a < OPTION; a++) {
        if (answer[a] === input[i]) {
          if (a === i) strike++;
          else ball++;
        }
      }
    }
    const guess = {
      'input': input,
      'strike': strike,
      'ball': ball,
      'out': 3 - strike - ball,
    };

    setList([...guessList, {...guess}])
    console.log(guessList);
    if (strike === 3) {
      setIsOver({...isOver, status: 1, msg: 'Win!!'})
      console.log("win")
    }
    else if (guessList.length === 10) {
      setIsOver({...isOver, status: 1});
    }
  };

  const onRestart = () => {
    // 모든 변수 초기화
    setInput();
    setAnswer(createRandom());
    setList([]);
    setIsOver({...isOver, status: 0});
  };

  return (
    <div>
      <Header />
      {!(isOver.status===1) && <><InputForm onChange={onChange} onGuess={onGuess} /><RecordList guessList={guessList} /></>}
      {isOver.status===1 && <Ending msg={isOver.msg} onRestart={onRestart} />}
    </div>
  );
}

export default App;