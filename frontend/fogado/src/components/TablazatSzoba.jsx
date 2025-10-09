import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TablazatSzoba({ selectedRoom }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedRoom) return;

    setLoading(true);
    axios.get(`http://localhost:3001/foglaltsag/${selectedRoom}`)
      .then(response => setData(response.data))
      .catch(error => console.error("Hiba:", error))
      .finally(() => setLoading(false));
  }, [selectedRoom]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Foglaltság: {selectedRoom}</h2>

      {!selectedRoom ? (
        <p className="text-center text-muted">Válassz egy szobát a foglaltság megtekintéséhez.</p>
      ) : loading ? (
        <p className="text-center">Adatok betöltése...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vendég neve</th>
              <th>Érkezés</th>
              <th>Távozás</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index}>
                  <td>{row.vnev}</td>
                  <td>{row.erk}</td>
                  <td>{row.tav}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">Nincs foglalás erre a szobára.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TablazatSzoba;