import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fejlec from './components/Fejlec';
import Main from './main';
import Tajekoztato from './components/Tajekoztato';

function App() {
  return (
    <Router>
      <Fejlec />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tajekoztato" element={<Tajekoztato />} />
      </Routes>
    </Router>
  );
}

export default App;