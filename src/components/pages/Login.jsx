import { useAuth } from '../hooks/AuthContext';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

const Login = () => {
    const { setIsAuth } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <Input type='text' placeholder='Введите логин' />
                <Input type='text' placeholder='Введите пароль' />
                <Button onClick={handleLogin}>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
