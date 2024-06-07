import React from 'react'

export default function Tabla(props) {
const tbody = props.rows.map(e => 
    <tr key={e.id}>
        <td>{e.titulo}</td>
        <td>{e.director}</td>
        <td>{e.genero}</td>
        <td>{e.duracion}</td>
    </tr>
)

    return (
        <div className="card">
            <div className="card-header">Tabla</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Director</th>
                            <th scope="col">Género</th>
                            <th scope="col">Duración</th>
                        </tr>
                    </thead>
                    <tbody>{tbody}</tbody>
                </table>
            </div>
        </div>
    )
}