const user = JSON.parse(localStorage.getItem('mailLocal'));

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

function cerrarSesion(){
    user = localStorage.clear();
    user = ""
}
        
document.addEventListener("DOMContentLoaded", function(){
 let htmlContentToAppend = "";

    htmlContentToAppend += `
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="botonMail" data-bs-toggle="dropdown">
    ${user.mail}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
    <li><a class="dropdown-item" href="login.html" onclick="cerrarSesion()">Cerrar Sesion</a></li>
  </ul>
  </div>  
  `

    document.getElementById('displaySesion').innerHTML += htmlContentToAppend;

    console.log(user)
});

