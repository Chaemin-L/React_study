import { Link, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li><Link to=''>Home</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username/:description" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
