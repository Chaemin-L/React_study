import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Profiles from './Profiles';
import Profile from "./Profile";
import HistorySample from './HistorySample';

function App() {
  const location = useLocation();

  return (
    <div>
      <ul>
        <li><NavLink to=''>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to="/profiles">프로필 목록</NavLink></li>
        <li><NavLink to="/history">예제</NavLink></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profiles" element={<Profiles />} >
          <Route path='' element={<div>유저를 선택해주세요.</div>}/>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/*" element={
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
