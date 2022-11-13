let infoDelUsuario = {};
const user = JSON.parse(localStorage.getItem('mailLocal'));
const boton = document.getElementById("boton-sbm")


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("emailInp").value = user.mail;})


    boton.addEventListener("click", () => {

    infoDelUsuario = {
        primerNombre: `${document.getElementById("primerNombreInp").value}`,
        segundoNombre: `${document.getElementById("segundoNombreInp").value}`,
        primerApellido: `${document.getElementById("primerApellidoInp").value}`,
        segundoApellido: `${document.getElementById("segundoApellidoInp").value}`,
        telefono: `${document.getElementById("telContactoInp").value}`,
    };
    localStorage.setItem("infoDelUsuario",JSON.stringify(infoDelUsuario));
});

console.log(localStorage)
const infoDUsuario = JSON.parse(localStorage.getItem('infoDelUsuario'));
console.log(infoDUsuario)


addEventListener("DOMContentLoaded", () => {
    {
            document.getElementById("primerNombreInp").value = infoDUsuario.primerNombre;
            document.getElementById("segundoNombreInp").value = infoDUsuario.segundoNombre;
            document.getElementById("primerApellidoInp").value = infoDUsuario.primerApellido;
            document.getElementById("segundoApellidoInp").value = infoDUsuario.segundoApellido;
            document.getElementById("telContactoInp").value = infoDUsuario.telefono;
        }}
        )