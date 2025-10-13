import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../img/logo.png'; // Importáljuk a logót

function SzobaLista() {
    const [szobak, setSzobak] = useState([]);
    const [kihasznaltsag, setKihasznaltsag] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/szobak')
            .then(response => setSzobak(response.data))
            .catch(error => console.error('Hiba a szobák lekérdezésénél:', error));

        axios.get('http://localhost:3001/vendej')
            .then(response => setKihasznaltsag(response.data))
            .catch(error => console.error('Hiba a kihasználtság lekérdezésénél:', error));
    }, []);

    return (
        <div className="container my-4">
            <div className="row d-flex justify-content-between">
                {/* Bal oldali tartalom */}
                <div className="content">
                    <div className="header">
                      
                    </div>
                    <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
                    <p>
                        A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.
                    </p>
                    <a href="https://falusiturizmus.eu/" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                        Tájékoztató oldal
                    </a>
                    <img src={logo} alt="Fogadó logója" className="img-fluid logo" />
                    <img src="src/img/holloko_masolata.jpg" alt="Hollókő másolata" className="img-fluid ketagyKep" />
                </div>

                {/* Középső tartalom */}
                <div className="content">
                    <h3>Falusi szálláshely fajtái</h3>
                    <ul>
                        <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység.</li>
                        <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része.</li>
                        <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel.</li>
                        <li>Sátorozóhely: falusi vendégház sátorozóhellyel.</li>
                    </ul>
                    <img src="src/img/ketagyas.jpg" alt="Kétágyas szoba" className="img-fluid ketagyKep" />
                </div>

                {/* Jobb oldali tartalom */}
                <div className="content">
                    <h3>A hét törpe fogadó</h3>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Szoba neve</th>
                                <th>Ágyak száma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {szobak.map((szoba, index) => (
                                <tr key={index}>
                                    <td>{szoba.sznev}</td>
                                    <td>{szoba.agy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>A házban összesen 21 fő fér el.</p>
                    <ol>
                        <li>Ruhásszekrény</li>
                        <li>Saját fürdőszoba zuhanytálcával</li>
                        <li>WC (fürdőszobával egyben)</li>
                    </ol>
                </div>
            </div>

            {/* Alsó rész */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>A vendégszobák foglaltsága</h3>
                    <select className="form-select mb-3">
                        <option value="">Válassz egy szobát</option>
                        {szobak.map((szoba, index) => (
                            <option key={index} value={szoba.sznev}>{szoba.sznev}</option>
                        ))}
                    </select>
                    <button className="btn btn-primary">Adatok lekérése</button>
                </div>
                <div className="col-md-6">
                    <h3>A szobák kihasználtsága</h3>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Szoba neve</th>
                                <th>Vendégek száma</th>
                                <th>Foglalt éjszakák száma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kihasznaltsag.map((adat, index) => (
                                <tr key={index}>
                                    <td>{adat.sznev}</td>
                                    <td>{adat['vendegek szama']}</td>
                                    <td>{adat['foglalt éjszakák száma']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SzobaLista;