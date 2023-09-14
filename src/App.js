import { AllDevelopmentKits } from './AllDevelopmentKits';
import { Career } from './Career';
import { CyberSecurity } from './CyberSecurity';
import { DataScience } from './DataScience';
import { FullStackDevelopment } from './FullStackDevelopment';
import { Form } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/Career" element={<Career />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <><h1>Blogs</h1><nav><ul><Link to='/FullStackDevelopment'>Full Stack Development</Link> | <Link to='/DataScience'>Data Science</Link> | <Link to='/CyberSecurity'>Cyber Security</Link> | <Link to='/Career'>Career</Link></ul></nav><AllDevelopmentKits /></>
  );
}

export default App;
