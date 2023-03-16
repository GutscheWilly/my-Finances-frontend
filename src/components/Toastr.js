import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

const showMessage = (type, message, title) => {
    toastr[type](message, title);
};

export const showErrorMessage = (message) => {
    showMessage('error', message, 'Error');
};

export const showSuccessMessage = (message) => {
    showMessage('success', message, 'Success');
};

export const showWarningMessage = (message) => {
    showMessage('warning', message, 'Warning');
};
