import { Navigate } from 'react-router-dom';
import App from '../App';
import About from '../components/pages/About';
import Posts from '../components/pages/Posts';
import PostIdPage from '../components/pages/PostIdPage';
import Error from '../components/pages/Error';
import Login from '../components/pages/Login';

export const privateRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to='/posts' replace />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/posts',
                element: <Posts />,
            },
            {
                path: '/posts/:postId',
                element: <PostIdPage />,
            },
            {
                path: '/login',
                element: <Navigate to='/posts' replace />,
            },
        ],
        errorElement: <Error />,
    },
];

export const publicRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to='/login' replace />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/about',
                element: <Navigate to='/login' replace />,
            },
            {
                path: '/posts',
                element: <Navigate to='/login' replace />,
            },
            {
                path: '/posts/:postId',
                element: <Navigate to='/login' replace />,
            },
        ],
        errorElement: <Error />,
    },
];
