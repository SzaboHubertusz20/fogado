import SzobaValaszto from './components/SzobaValaszto';
import TablazatSzoba from './components/TablazatSzoba';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/App.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Main() {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <div>
            <SzobaValaszto onSelect={setSelectedRoom} />
            <TablazatSzoba selectedRoom={selectedRoom} />
        </div>
    );
}

export default Main;import axios from 'axios';
import { useEffect, useState } from 'react';