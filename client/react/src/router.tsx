import {
    createBrowserRouter,
    Link,
    Navigate,
    RouteObject,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]

const router = createBrowserRouter(routes)
export default router
