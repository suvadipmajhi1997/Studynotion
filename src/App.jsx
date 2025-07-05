// src/App.jsx
import Home from './pages/Home'; // ✅ DEFAULT import
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer'
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
