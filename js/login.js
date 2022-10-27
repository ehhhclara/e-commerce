
document.getElementById('iniBtn').addEventListener('click', function(evento)
{
    let contra = document.getElementById('contraseña').value;
    let mail = document.getElementById('direccionMail').value

    if (contra.length === 0) {
        evento.preventDefault();
        alert('Ingresar contraseña');
    }


    if (mail.length === 0) {
        evento.preventDefault();
        alert('Ingresar dirección de mail');
    }


    else {
        evento.preventDefault();
        window.location.href = '\index.html';
    }
}); 


document.getElementById('iniBtn').addEventListener('click', function login (){
    let user = {}
    user.mail = document.getElementById("direccionMail").value;
localStorage.setItem('mailLocal',JSON.stringify(user));
    });








