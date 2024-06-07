import React, {useState} from 'react'

export default function Registro({onRegistrar}) {
    const [titulo, setTitulo] = useState('')
    const [director, setDirector] = useState('')
    const [genero, setGenero] = useState('')
    const [duracion, setDuracion] = useState('')
    const [sinapsis, setSinapsis] = useState('')
    const [idClasificacion, setId] = useState('')

    const handleClick = () => {
        const pelicula = {
            titulo: titulo,
            director: director,
            genero: genero,
            duracion: duracion,
            sinopsis: sinapsis,
            idClasificacion: idClasificacion
        }
        onRegistrar(pelicula)
    }


    return (
        <>
            <div className='form'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Título</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setTitulo(e.target.value)}}></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Director</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setDirector(e.target.value)}}></input>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Género</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={(e)=>{setGenero(e.target.value)}}>
                        <option selected >Choose...</option>
                        <option value="1">Terror</option>
                        <option value="2">Acción</option>
                        <option value="3">Romance</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Sinápsis</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setSinapsis(e.target.value)}}></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Duración</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setDuracion(e.target.value)}}></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Id Clasificación</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{setId(e.target.value)}}></input>
                </div>

                <button className="btn btn-primary mt-3" onClick={handleClick}>Registrar</button>
            </div>
        </>

    )
}
