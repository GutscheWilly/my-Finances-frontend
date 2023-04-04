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

    const navigateToSearchLaunches = () => {
        return navigate('/launches');
    };

    const navigateToRegisterLaunch = () => {
        return navigate('/register-launch');
    };

    return {
        navigateToLogin,
        navigateToRegisterUser,
        navigateToHome,
        navigateToSearchLaunches,
        navigateToRegisterLaunch
    };
}

export default NavigateService;
