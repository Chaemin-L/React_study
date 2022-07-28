import React, {useState} from 'react';
import Header from './Header';
import InputForm from './InputForm';
import GameOver from './GameOver';

function App() {
  const [answer, setAnswer] = useState(String(Math.floor(Math.random() * 999)).padStart(3, '0'));
  const [guess_list, setList] = useState([]);
  const [input, setInput] = useState();
  const [isGameOver, setGameOver] = useState(0);
  const onChange = e => {
    setInput(e.target.value);
    console.log(input, answer);
  };

  const onGuess = () => {
    // Strike, Ball, Out Algorithm
    guess_list.push(input);
    console.log(guess_list);
    if (guess_list.length === 10) {
      console.log("Game over!");
      setGameOver(1);
    }
  };

  const onRestart = () => {
    // 모든 변수 초기화
    setInput();
    setAnswer(String(Math.floor(Math.random() * 999)).padStart(3, '0'));
    setList([]);
    setGameOver(0);
  };





  return (
    <div>
      <Header />
      {!isGameOver && <InputForm onChange={onChange} onGuess={onGuess} />}
      {isGameOver && <GameOver onRestart={onRestart} />}
    </div>
  );
}

export default App;