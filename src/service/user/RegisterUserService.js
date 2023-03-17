import EmailValidator from 'email-validator';
import PasswordValidator from 'password-validator';
import { showErrorMessage } from '../../components/Toastr';

const createPasswordValidator = () => {
    const passwordValidator = new PasswordValidator();

    passwordValidator
        .is().min(8, 'Password should have a minimum length of 8 characters!')                                    
        .is().max(100, 'Password should have a maximum length of 100 characters!')                                  
        .has().uppercase(1, 'Password should have a minimum of 1 uppercase letter!')                              
        .has().lowercase(1, 'Password should have a minimum of 1 lowercase letter!')                              
        .has().digits(2, 'Password should have a minimum of 2 digits')                                
        .has().not().spaces(0, 'Password should not have spaces');
        
    return passwordValidator;
};

function RegisterUserService() {
    const validateName = (name) => {
        const isNameValid = name.length > 2;

        if (isNameValid === false) {
            showErrorMessage('Name should have a minimum 3 characters!');
            return false;
        }
        return true;
    };

    const validateEmail = (email) => {
        const isEmailValid = EmailValidator.validate(email);

        if (isEmailValid === false) {
            showErrorMessage('Enter a valid email!');
            return false;
        }
        return true;
    };

    const validatePassword = (password, confirmPassword) => {
        const passwordValidator = createPasswordValidator();

        function isPasswordValid() {
            return passwordValidator.validate(password);
        }
    
        function getPasswordErrorMessage() {
            const passwordError = passwordValidator.validate(password, { details: true });
            return passwordError[0].message;
        }

        if (isPasswordValid() === false) {
            const passwordErrorMessage = getPasswordErrorMessage();
            showErrorMessage(passwordErrorMessage);
            return false;
        }

        function checkConfirmPassword() {
            return confirmPassword === password;
        }

        if (checkConfirmPassword() === false) {
            showErrorMessage('Please, make sure your password match!');
            return false;
        }
        return true;
    };

    return {
        validateName,
        validateEmail,
        validatePassword
    };
}

export default RegisterUserService;
