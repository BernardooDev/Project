history.replaceState(null, '', './home.html');
// Limpar os parâmetros de email e senha na URL.

document.addEventListener("DOMContentLoaded", () => {
const imageStatic = document.getElementById("imageStatic");
const imageProfile = document.querySelector("#imageProfile");
<<<<<<< HEAD
const selectFile = document.getElementById("selectFile");
=======
const selectFile = document.getElementsByClassName("selectFile");
>>>>>>> new

imageProfile.addEventListener("change", function () {
    const imgProfile = new FileReader();

    imgProfile.addEventListener("load", () => {
        imageStatic.setAttribute("src", imgProfile);
        localStorage.setItem("imgProfile", imgProfile.result);
        window.location.reload()
    });

    imgProfile.readAsDataURL(this.files[0]);
})

const newImgProfile = localStorage.getItem("imgProfile");
    if(newImgProfile) {
        imageStatic.setAttribute("src", newImgProfile);
    }  
});

const infoProfile = document.querySelector(".infoProfile")
const userName = localStorage.getItem("name");
const userEmail = localStorage.getItem("email");
const userPhone = localStorage.getItem("cellphone")

const divName = document.createElement("div");
divName.setAttribute("id","infoDiv");
divName.innerHTML =
`
    <label for="userEmail">Nome:</label>
    <p id="userName">${userName}</p>
`;
infoProfile.appendChild(divName);

const divEmail = document.createElement("div");
divEmail.setAttribute("id","infoDiv");
divEmail.innerHTML =
`
    <label for="userEmail">Email:</label>
    <p id="userEmail">${userEmail}</p>
`;
infoProfile.appendChild(divEmail);

const divPhone = document.createElement("div");
divPhone.setAttribute("id","infoDiv");
divPhone.innerHTML =
`
    <label for="userEmail">Celular:</label>
    <p id="userEmail">${userPhone}</p>
`;
infoProfile.appendChild(divPhone);

<<<<<<< HEAD
=======
const h1 = document.querySelector("h1");
h1.textContent = 
`
    Bem-vindo(a)${userName}
`

>>>>>>> new



