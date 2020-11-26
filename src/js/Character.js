
import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async() => {

    const id = getHash();
    const caracter = await getData(id);

    const vista = `
    
    <div class="caracter-inner">

        <article class="caracter-card">

            <img src="${caracter.image}" alt="${caracter.name}">

            <h2>${caracter.name}</h2>

        </article>

        <article class="caracter-card">

            <h3>Episodes: <span>${caracter.episode.length}</span></h3>
            <h3>Status: <span>${caracter.status}</span></h3>
            <h3>Species: <span>${caracter.species}</span></h3>
            <h3>Gender: <span>${caracter.gender}</span></h3>
            <h3>Origin: <span>${caracter.origin.name}</span></h3>
            <h3>Last Location: <span>${caracter.location.name}</span></h3>

        </article>

    </div>
    
    `;

    return vista;
}

export default Character;