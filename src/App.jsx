// src/App.jsx
import Home from './pages/Home'; // ✅ DEFAULT import
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
