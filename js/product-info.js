const id_prod_actual = localStorage.getItem("productID");
const prod_actual = `https://japceibal.github.io/emercado-api/products/${id_prod_actual}.json`;
const prod_actual_comentarios = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("productID") + EXT_TYPE;


//Añadir datos


document.addEventListener('DOMContentLoaded', function (){
    getJSONData(prod_actual).then(function(prodObj){
            let dataToAppend =  
            `<h1 class="text-left p-4">${prodObj.data.name}</h1>
            <hr>
            <h3>Precio</h3>
            <p> UYU ${prodObj.data.cost}</p>
            <h3>Descripción</h3>
            <p>${prodObj.data.description}</p>
            <h3>Categoría</h3>
            <p>${prodObj.data.category}</p>
            <h3>Cantidad de vendidos</h3>
            <p>${prodObj.data.soldCount}</p>
            <h3 class ="mb-3">Imágenes ilustrativas</h3>
            `;


//Añadir fotos


for (foto of prodObj.data.images)
            {dataToAppend += `
        <div id="carouselprod" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="${foto}" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="${foto}" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="${foto}" alt="Third slide">
            </div>
            </div>
        </div> `;
            }
document.getElementById('productinfo-container').innerHTML = dataToAppend;
        }
)
});


//Añadir comentarios


document.addEventListener('DOMContentLoaded', function (){
    getJSONData(prod_actual_comentarios).then(function(prodCom){
let comentarioToAppend = `<h2 class="py-4 mt-4"> Comentarios </h2>`;

for (comentario of prodCom.data)
    {comentarioToAppend += `<div class="col-md-12 rounded border p-0 mb-2 d-flex row bg-light">
        <p class="fw-bold mt-2">${comentario.user}</p>
        <p class ="small text-muted float-right">${comentario.dateTime}</p>
        <p>${comentario.description}</p>
        </div>`;

           //Puntaje por estrellas
        for (let count = 1; count <= 5; count++){
            if (count <= comentario.score) {
                comentarioToAppend += `<span class="fa fa-star checked"></span>`;
                } 
            else {
                comentarioToAppend += `<span class="fa fa-star"></span>`;
                }
            }
            document.getElementById('productinfo-comentarios').innerHTML = comentarioToAppend;
    }
    });

});





getJSONData(prod_actual).then(function (prodObj){
        let productData = prodObj.data;
        let RelContentToAppend = "";
        console.log(productData.relatedProducts)

        for (prodrel of productData.relatedProducts)
        RelContentToAppend += 
        
        `<li class=" row p-2 col-lg-4 p-4">
        <div onclick="redireccionProducto(${prodrel.id})" class="list-group-item list-group-item-action cursor-active"> 
        <div class="row">
                <img id="imagen1" src="${prodrel.image}" class="img-thumbnail">
            </div>
            <div class="row">
                <h4 class="mb-1 product-header col-sm">${prodrel.name}</h4>
                <a class="btn-productorel mt-4 "> Ver más </a>
            </div>
        </li>
        `;
        document.getElementById("productos-relacionados").innerHTML = RelContentToAppend;
}); 

function redireccionProducto(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
};