
const API = 'https://rickandmortyapi.com/api/character/';

const getData = async(id) => {

    const urlApi = id ? `${API}${id}` : API;

    try {
        
        const datosApi = await fetch(urlApi);
        const personajes = await datosApi.json();
    
        return personajes;

    } catch (error) {

         console.log(error);
    };


};

export default getData;