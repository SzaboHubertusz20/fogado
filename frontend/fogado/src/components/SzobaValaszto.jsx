import React from 'react';

function SzobaValaszto({ onSelect }) {
    const szobak = ['Hét törpe fogadó', 'Tölgyfa vendégház', 'Napraforgó lakrész'];

    return (
        <div className="container my-4">
            <h3 className="text-center">Válassz egy szobát</h3>
            <div className="d-flex justify-content-center">
                {szobak.map((szoba, index) => (
                    <button
                        key={index}
                        className="btn btn-primary mx-2"
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