import { Outlet } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
