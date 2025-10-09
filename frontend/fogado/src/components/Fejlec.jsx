import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; 

function Fejlec() {
    return (
        <header className="bg-fej p-3 text-white">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} alt="Logo" className="img-fluid opacity-50" style={{ height: '60px' }} />
                <nav>
                    <Link to="/" className="btn btn-outline-light mx-2">Főoldal</Link>
                    <Link to="/tajekoztato" className="btn btn-outline-light mx-2">Tájékoztató oldal</Link>
                </nav>
            </div>
        </header>
    );
}

export default Fejlec;