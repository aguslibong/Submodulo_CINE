import React, { useState } from 'react';

export default function Filtro({ onConsultar }) {
    const [titulo, setTitulo] = useState('');

    const handleClick = () => {
        onConsultar(titulo);
    };

    return (
        <div className="card">
            <div className="card-header">Filtro</div>
            <div className="card-body">
                <h5 className="card-title">Ingrese el nombre de la película</h5>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={(event) => setTitulo(event.target.value)} 
                />
                <button className="btn btn-primary mt-3" onClick={handleClick}>Consultar</button>
            </div>
        </div>
    );
}
