let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let pass = document.getElementById('password');
let confirmPass = document.getElementById('confirmPassword');
let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    let message = `First Name: ${firstName.value}\n`;
    message += `Last Name: ${lastName.value}\n`;
    message += `Email: ${email.value}\n`;
    message += `Number: ${number.value}\n`;
    message += `Password: ${pass.value}\n`;
    message += `Confirm Password: ${confirmPass.value}\n`;
    
    // console.log(message)
    // console.log(e.target)
    
    if (pass.value == '') {
        alert("Password is empty");
    } else {
        if (pass.value === confirmPass.value) {
            confirmPass.className = 'input-confirm-password';
            window.location.href="http://127.0.0.1:5500/Odin-project/sign-up/signed-in.html"
            alert("Password matches")
        } else {
            alert("Password does not match");
            window.location.href="http://127.0.0.1:5500/Odin-project/sign-up/"
            // window.location.reload()
        }
    }
});
