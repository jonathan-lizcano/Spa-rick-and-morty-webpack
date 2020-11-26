
import getData from '../utils/getData'

const home = async() => {

    const Characters =  await getData();
    const vista = `
    <div class="caracters">
    ${Characters.results.map(character => `
    
    
        <article class="caracter-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
    
    `).join('')}
    </div>
    
    `;

    return vista;
}

export default home;