<<<<<<< HEAD
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
=======
const formLogin = document.getElementsByClassName("formLogin")
// Pega o formulário 

formLogin.addEventListener("submit", function() {
    e.preventDefault();
// Previne o formulário de ficar recarregando a página

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
// Armazenda os dados que foram colocados anteriormentes em uma váriavel 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
// Pega os valores de cada input

    if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        this.submit();

// Verifica se os valores de cada campo são coincidente ao dados armazenados 

    } else {
        alert('Email ou senha inválidos. Tente novamente!');
    }
// Caso não sejam coincidente, informa o usuário.
>>>>>>> new
});
