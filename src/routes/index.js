
import  home  from '../js/home';
import  Character  from '../js/Character';
import  Error404  from '../js/Error404';
import Header from '../js/header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {

    '/': home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async() => {
    
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;
