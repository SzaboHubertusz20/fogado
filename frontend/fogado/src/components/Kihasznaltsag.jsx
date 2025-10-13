import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Kihasznaltsag() {
    const [adatok, setAdatok] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/vendej')
            .then(response => setAdatok(response.data))
            .catch(error => console.error('Hiba a kihasználtság lekérdezésénél:', error));
    }, []);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Szobák kihasználtsága</h2>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Vendégek száma</th>
                        <th>Foglalások száma</th>
                    </tr>
                </thead>
                <tbody>
                    {adatok.map((sor, index) => (
                        <tr key={index}>
                            <td>{sor.sznev}</td>
                            <td>{sor['vendegek szama']}</td>
                            <td>{sor['foglalt éjszakák száma']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Kihasznaltsag;
