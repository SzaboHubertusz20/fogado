import React, { useState, useEffect } from "react";
import axios from "axios";

function TablazatSzoba({ selectedRoom }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setData([]); // Töröljük az előző adatokat minden új választásnál
        if (!selectedRoom) return;

        setLoading(true); // Betöltési állapot
        axios.get(`http://localhost:3001/foglaltsag/${selectedRoom}`)
            .then(response => setData(response.data))
            .catch(error => console.error("Hiba:", error))
            .finally(() => setLoading(false)); // Betöltés vége
    }, [selectedRoom]);

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">A vendégszobák foglaltsága</h2>

            {!selectedRoom ? (
                <p className="text-center text-muted">Válassz egy szobát a foglaltság megtekintéséhez.</p>
            ) : loading ? (
                <p className="text-center">Adatok betöltése...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>A vendég neve</th>
                            <th>Szoba neve</th>
                            <th>Érkezés dátuma</th>
                            <th>Távozás dátuma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((row) => (
                                <tr key={row.szazon}>
                                    <td>{row.vnev}</td>
                                    <td>{row.sznev}</td>
                                    <td>{row.erk}</td>
                                    <td>{row.tav}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">Nincs foglalás erre a szobára.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TablazatSzoba;