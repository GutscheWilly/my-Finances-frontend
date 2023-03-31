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

    const navigateToRegisterLaunch = () => {
        return navigate('/register-launch');
    };

    return {
        navigateToLogin,
        navigateToRegisterUser,
        navigateToHome,
        navigateToRegisterLaunch
    };
}

export default NavigateService;
