import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';

const privateRouter = createBrowserRouter(privateRoutes);
const publicRouter = createBrowserRouter(publicRoutes);

const AppRouter = () => {
    const isAuth = true;
    return <>{isAuth ? <RouterProvider router={privateRouter} /> : <RouterProvider router={publicRouter} />}</>;
};

export default AppRouter;
