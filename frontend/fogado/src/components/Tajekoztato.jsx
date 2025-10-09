import React from 'react';

function Tajekoztato() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Tájékoztató oldal</h1>

            <section className="mb-5">
                <h2>Falusi szálláshely fajtái</h2>
                <ul>
                    <li>
                        <strong>Vendégszoba:</strong> a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.
                    </li>
                    <li>
                        <strong>Lakrész:</strong> önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt.
                    </li>
                    <li>
                        <strong>Vendégház:</strong> önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.
                    </li>
                    <li>
                        <strong>Sátorozóhely:</strong> csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.
                    </li>
                </ul>
            </section>

            <section className="mb-5">
                <h2>A hét törpe fogadó jellemzői</h2>
                <ul>
                    <li>Ruhásszekrény</li>
                    <li>Saját fürdőszoba zuhanytálcával</li>
                    <li>WC (fürdőszobával egyben)</li>
                </ul>
            </section>

          </div>
    );
}

export default Tajekoztato;