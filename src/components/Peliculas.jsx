import React, { useEffect, useState } from 'react'
import service from '../services/peliculas.service.js'
import Filtro from '../components/componentsPeliculas/Filtro.jsx'
import Tabla from '../components/componentsPeliculas/Tabla.jsx'
import Registro from './componentsPeliculas/Registro.jsx'

export default function Peliculas() {
    //estado:
    const [rows, setRows] = useState([])
    const [action, setAction] = useState('C')

    useEffect(() => {
        //Funcion para inicializar las variables de estado del componente
        const load = async () => {
            const data = await service.getByFilters(null)
            setRows(data)
        }
        load()
    }, [])

    //funciones auxiliares:
    const onConsultar = async (filtro) => {
        const data = await service.getByFilters(filtro)
        setRows(data)
    }

    const onRegistrar = async(pelicula) => {
        const data = await service.postPelicula(pelicula)
        setRows(data)

    }

    return (
        <>
            <button class="btn btn-primary" type="submit">Consultar</button>
            <button class="btn btn-primary" type="submit" onClick={() => {setAction('A')}}>Nueva Película</button>

                    {
                        action === 'C' && (
                            <>
                                <Filtro onConsultar={onConsultar}></Filtro>
                                <Tabla rows={rows}></Tabla>
                            </>
                        )
                    }

                    {action === 'A' && (
                        <>
                         <Registro onRegistrar={onRegistrar}></Registro>
                         <Tabla rows={rows}></Tabla>
                         </>
                    )
                    }
                </>
                )
}