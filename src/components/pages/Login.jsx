import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <Input type='text' placeholder='Введите логин' />
                <Input type='text' placeholder='Введите пароль' />
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
