const formLogin = document.getElementById("formLogin");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        formLogin.submit();
    } else {
        alert('Email ou senha inválidos. Tente novamente!');
    }
}); 
