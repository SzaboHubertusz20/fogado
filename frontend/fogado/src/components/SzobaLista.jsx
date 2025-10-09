import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SzobaLista() {
  const [szobak, setSzobak] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/szobak')
      .then(response => setSzobak(response.data))
      .catch(error => console.error('Hiba a szobák lekérdezésénél:', error));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">A hét törpe fogadó szobái</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Ágyak száma</th>
          </tr>
        </thead>
        <tbody>
          {szobak.map((szoba) => (
            <tr key={szoba.szazon}>
              <td>{szoba.sznev}</td>
              <td>{szoba.agy + szoba.potagy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SzobaLista;