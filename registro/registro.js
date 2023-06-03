const btnRegister = document.getElementById("btnRegister")
// Pegando o elemento de botão 

async function saveData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cellphone = document.getElementById("cellphone").value
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
// Pegando os valores de cada input 

    if(name === '' || email === '' || cellphone === '' || password === '' || confirmpassword === '') {
        alert("Por favor, preencha todos os campos!");
    } else {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('cellphone', cellphone);
        localStorage.setItem('password', password);
        localStorage.setItem('confirmpassword', confirmpassword);
// Adicionando o valores no localStorage

        alert('Dados cadastrados com sucesso!');
// Aviso de dados cadastrados e armazenados no localStorage

        window.location.href="/login/login.html";
// Redirecionando o usuário ao login 
    }
}


