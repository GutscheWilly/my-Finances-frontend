import { useNavigate } from 'react-router-dom';

function NavigateService() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        return navigate('/login');
    };

    const navigateToRegisterUser = () => {
        return navigate('/register-user');
    };

    const navigateToHome = () => {
        return navigate('/home');
    };

    return {
        navigateToLogin,
        navigateToRegisterUser,
        navigateToHome
    };
}

export default NavigateService;
