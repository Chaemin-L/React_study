import Wrapper from './Wrapper'
import Hello from './Hello';
import './App.css';

function App() {
  const inEnglish = "Hi, I'm chaemin!";
  const JSStyle = {
    padding: 20,
    backgroundColor: 'yellow',
    width: 'min-content',
    fontWeight: 'bold',
  }
  const ReactStyle = {
    padding: 20,
    backgroundColor: 'black',
    color: 'aqua',
    width: 'min-content',
    fontWeight: 'bold',
  }
  // JSX 외부에서는 한줄 주석도,
  /* 여러 줄 주석도 가능 */
  return (
    <Wrapper>
      <Hello name="charming-l" color="skyblue" /> { /* props를 지정한 Hello 컴포넌트, 넘긴 props 값 사용*/ }
      <Hello></Hello>  { /* props가 없는 Hello 컴포넌트, defaultValue 사용*/ }
      <div>{inEnglish}</div>      
      <div style={JSStyle}>JS</div>
      <div style={ReactStyle}>React</div>
      <div className='gray-box' //태그 내에서는 한줄 주석 가능!
      />
      { /* 주석도 작성해보자 */}
      /* 중괄호가 없으면 화면에 보인다. */
    </Wrapper>
  );
}

export default App;
