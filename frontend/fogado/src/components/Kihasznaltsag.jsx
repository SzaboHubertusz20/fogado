import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Kihasznaltsag() {
  const [adatok, setAdatok] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/kihasznaltsag')
      .then(response => setAdatok(response.data))
      .catch(error => console.error('Hiba a kihasználtság lekérdezésénél:', error));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Szobák kihasználtsága</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Vendégek száma</th>
            <th>Vendégéjszakák száma</th>
          </tr>
        </thead>
        <tbody>
          {adatok.map((sor, index) => (
            <tr key={index}>
              <td>{sor.sznev}</td>
              <td>{sor.vendegek}</td>
              <td>{sor.vendegejszakak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Kihasznaltsag;
