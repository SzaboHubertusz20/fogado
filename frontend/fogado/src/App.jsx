import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fejlec from './components/Fejlec';
import SzobaLista from './components/SzobaLista';
import Kihasznaltsag from './components/Kihasznaltsag';

function App() {
    return (
        <Router>
            <Fejlec />
            <div className="bg-torzs">
                <Routes>
                    <Route path="/" element={<SzobaLista />} />
                    <Route path="/kihasznaltsag" element={<Kihasznaltsag />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;