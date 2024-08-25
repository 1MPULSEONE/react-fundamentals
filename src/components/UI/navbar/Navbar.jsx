import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { useAuth } from '../../hooks/AuthContext';

const Navbar = () => {
    const { setIsAuth } = useAuth();

    const handleLogout = e => {
        e.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <div className={'navbar'}>
            <Button onClick={handleLogout}> Выйти</Button>
            <div className={'navbar__links'}>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;
