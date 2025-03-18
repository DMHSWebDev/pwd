

let form = document.getElementById('registration-form');

form.addEventListener('submit', function (event) {


    event.preventDefault();

    let password = document.getElementById('password');
    console.log('password length = ' + password.value.length);
    let confirm_password = document.getElementById('confirm-password');
    console.log(confirm_password.value);
    let error = document.getElementById('password-error');


    // Accepts passwords with at least 8 characters, one uppercase, one lowercase ByteLengthQueuingStrategy, one Number, and one special character
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



    if (password.value !== confirm_password.value) {
        error.textContent = ' passwords do not match';
    } else {
        error.textContent = '';
        //   if(passwordPattern.test)
        console.log('password is strong = ' + passwordPattern.test(password.value));
        if (passwordPattern.test(password.value)) {
            error.textContent = ''
            console.log('password meets all criteria');
        } else {
            console.log('password not strong enough');
            error.textContent = 'password is not strong enough'
        }

    }


});