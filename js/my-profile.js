let infoDelUsuario = {};
const user = JSON.parse(localStorage.getItem('mailLocal'));
const boton = document.getElementById("boton-sbm")
let msjError = document.getElementById("mensajeError")
const infoDUsuario = JSON.parse(localStorage.getItem('infoDelUsuario'));


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("emailInp").value = user.mail;})




//validaciones
    boton.addEventListener("click", () =>{
if(`${document.getElementById("primerNombreInp").value}`=== '' )
    {msjError.innerHTML = '<p style="color: red">Debe ingresar el nombre</p>'}
    else if(`${document.getElementById("primerApellidoInp").value}`=== '' )
    {msjError.innerHTML = '<p style="color: red">Debe ingresar el apellido</p>'}
    else if(user.mail=== '' )
    {msjError.innerHTML = '<p style="color: red">Debe ingresar el mail</p>'}

else 
{ msjError.innerHTML ='<p style="color: green">Datos actualizados correctamente</p>'};
});


// guardar elementos en el local storage
    boton.addEventListener("click", () => {
    infoDelUsuario = {
        primerNombre: `${document.getElementById("primerNombreInp").value}`,
        segundoNombre: `${document.getElementById("segundoNombreInp").value}`,
        primerApellido: `${document.getElementById("primerApellidoInp").value}`,
        segundoApellido: `${document.getElementById("segundoApellidoInp").value}`,
        telefono: `${document.getElementById("telContactoInp").value}`,
    };
    localStorage.setItem("infoDelUsuario",JSON.stringify(infoDelUsuario));
}
);


// mostrar elementos en el formulario
addEventListener("DOMContentLoaded", () => {
    
    {
            document.getElementById("primerNombreInp").value = infoDUsuario.primerNombre;
            document.getElementById("segundoNombreInp").value = infoDUsuario.segundoNombre;
            document.getElementById("primerApellidoInp").value = infoDUsuario.primerApellido;
            document.getElementById("segundoApellidoInp").value = infoDUsuario.segundoApellido;
            document.getElementById("telContactoInp").value = infoDUsuario.telefono;
        }
}
        );
