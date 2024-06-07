const URL = 'http://localhost:3001/api/peliculas'


async function getByFilters(filter){
    let api_url = (filter)? URL + '?titulo=' + filter : URL
    
    const res = await fetch(api_url, {method:'GET'}) //si no pongo ningun metodo, toma por defecto el GET
    const data = await res.json()
    return data
 }


 async function postPelicula(pelicula) {
    try {
        console.log(pelicula)
        const res = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(pelicula)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch:', error.message);
        throw error; // Lanza el error para que pueda ser manejado por el llamador.
    }
}

export default {getByFilters, postPelicula}



