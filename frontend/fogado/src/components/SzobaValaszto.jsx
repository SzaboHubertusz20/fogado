import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SzobaValaszto({ onSelect = () => {} }) {
    const [szobak, setSzobak] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/szobak')
            .then(response => setSzobak(response.data.map(szoba => szoba.sznev)))
            .catch(error => console.error('Hiba a szobák lekérdezésénél:', error));
    }, []);

    return (
        <div className="container my-4">
            <h3 className="text-center">Válassz egy szobát</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {szobak.map((szoba, index) => (
                    <button
                        key={index}
                        className="btn btn-primary m-2"
                        onClick={() => onSelect(szoba)}
                    >
                        {szoba}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SzobaValaszto;