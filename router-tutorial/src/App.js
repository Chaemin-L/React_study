import { Link, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <ul>
        <li><Link to=''>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to="/profiles">프로필 목록</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
