import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { useAuth } from '../hooks/authContext';

const privateRouter = createBrowserRouter(privateRoutes);
const publicRouter = createBrowserRouter(publicRoutes);

const AppRouter = () => {
    const { isAuth } = useAuth();

    return <>{isAuth ? <RouterProvider router={privateRouter} /> : <RouterProvider router={publicRouter} />}</>;
};

export default AppRouter;
