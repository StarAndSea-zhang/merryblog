import Login from '../pages/Login';
import Home from '../pages/Home';

const routes = [
    {
        path: '/',
        component:Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
];
export default routes;