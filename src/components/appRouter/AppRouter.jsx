import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from '../../App';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const router = createBrowserRouter([
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
        ],
        errorElement: <Error />,
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
