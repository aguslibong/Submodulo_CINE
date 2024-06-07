import React, { useState } from 'react';

export default function Registro({ onRegistrar }) {
    const [pelicula, setPelicula] = useState({
        titulo: '',
        director: '',
        genero: '',
        duracion: '',
        sinopsis: '',
        idClasificacion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPelicula((prevPelicula) => ({
            ...prevPelicula,
            [name]: value
        }));
    };

    const handleClick = () => {
        onRegistrar(pelicula);
    };

    return (
        <div className='form'>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="titulo">Título</label>
                <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    name="titulo"
                    value={pelicula.titulo}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="director">Director</label>
                <input
                    type="text"
                    className="form-control"
                    id="director"
                    name="director"
                    value={pelicula.director}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="genero">Género</label>
                <select
                    className="form-select"
                    id="genero"
                    name="genero"
                    value={pelicula.genero}
                    onChange={handleChange}
                >
                    <option value="" disabled>Choose...</option>
                    <option value="Terror">Terror</option>
                    <option value="Acción">Acción</option>
                    <option value="Romance">Romance</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="sinopsis">Sinopsis</label>
                <input
                    type="text"
                    className="form-control"
                    id="sinopsis"
                    name="sinopsis"
                    value={pelicula.sinopsis}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="duracion">Duración</label>
                <input
                    type="text"
                    className="form-control"
                    id="duracion"
                    name="duracion"
                    value={pelicula.duracion}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="idClasificacion">Id Clasificación</label>
                <input
                    type="text"
                    className="form-control"
                    id="idClasificacion"
                    name="idClasificacion"
                    value={pelicula.idClasificacion}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleClick}>Registrar</button>
        </div>
    );
}
