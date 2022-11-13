const usuario25801 = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;
let cartProd ={};

let costototalFinal = document.getElementById("totalId");
let subtotalFinal = document.getElementById("costoUnitarioId");
let precioEnvio = document.getElementById("costoEnvioId");
let envioS = document.getElementById("envioSta");
let envioE = document.getElementById("envioExp");
let envioP = document.getElementById("envioPre");


//funcion para agregar elementos al carrito
function appProduct (product){
for ( i = 0; i < product.length; i++) {
    document.getElementById("cartTab").innerHTML +=`
    <th scope="row"><img src="${product[i].image}" width="70px"/></th>
    <td>${product[i].name}</td>
    <td id="precioUnitario">${product[i].unitCost}</td>
    <td><input  id="inputCantidad" onclick="subTotal()" type="number" value="${product[i].count}" min="1"/></td>
    <td class="col-2" id="precioTotal">${product[i].unitCost}</td>`


  
    if (envioP.checked){
      precioEnvio.innerHTML = `USD ${(product[i].unitCost * 0.15)}`;
    subtotalFinal.innerHTML=`USD ${(product[i].unitCost)}`
    costototalFinal.innerHTML = `USD ${(product[i].unitCost * 0.15)+(product[i].unitCost)}`
    ;}

    else if (envioE.checked){
        precioEnvio.innerHTML = `USD ${(product[i].unitCost * 0.07)}`;
        subtotalFinal.innerHTML=`USD ${(product[i].unitCost)}`
        costototalFinal.innerHTML = `USD ${(product[i].unitCost * 0.07)+(product[i].unitCost)}`
        ;}
        
      else if (envioS.checked){
          precioEnvio.innerHTML = `USD ${(product[i].unitCost * 0.05)}`;
          subtotalFinal.innerHTML=`USD ${(product[i].unitCost)}`
          costototalFinal.innerHTML = `USD ${(product[i].unitCost * 0.05)+(product[i].unitCost)}`
          ;}
}}

//funcion para caluclar el subtotal
    function subTotal(){
      let precio = document.getElementById("precioUnitario");
      let precioFinal = document.getElementById("precioTotal");
      let cantidad = document.getElementById("inputCantidad").value;
        let preciotxt = precio.innerText;
        precioFinal.innerHTML = cantidad * parseInt(preciotxt);
    }; 


    //funcion de bloquear transferencia
     function bloquearTransferencia(){
      document.getElementById("nroCuenta").disabled = true;

      document.getElementById("nroTarjeta").disabled = false;
      document.getElementById("codigoSeguridad").disabled = false;
      document.getElementById("vencimiento").disabled = false;
     }


     //funcion de bloquear tarjeta
     function bloquearTarjeta(){
      document.getElementById("nroTarjeta").disabled = true;
      document.getElementById("codigoSeguridad").disabled = true;
      document.getElementById("vencimiento").disabled = true;

      document.getElementById("nroCuenta").disabled = false;
     }

     //validar formulario
document.getElementById("btnsubmit").addEventListener("click", function validaciones (event) {
  
      // form direccion
      
      let calle = document.getElementById("inputCalle")
      let numero = document.getElementById("inputNumero")
      let esquina = document.getElementById("inputEsquina")
      let mjcalle = document.getElementById("mensaje-calle")
      let mjnumero = document.getElementById("mensaje-numero")
      let mjesquina = document.getElementById("mensaje-esquina")

      if (calle.value === '') {
        event.preventDefault();
        mjcalle.innerHTML = 'Añadir calle';
        calle.classList.add('danger');
      mjcalle.classList.add('danger')}
    
      if (numero.value === '') {
          event.preventDefault();
          mjnumero.innerHTML = 'Añadir numero'
          mjnumero.classList.add('danger');
          numero.classList.add('danger')}
        
      if (esquina.value === '') {
        event.preventDefault();
        mjesquina.innerHTML = 'Añadir esquina'
        mjesquina.classList.add('danger');
        esquina.classList.add('danger')}

        // metodo de pago

        let numtarjeta = document.getElementById("nroTarjeta")
      let codseguridad = document.getElementById("codigoSeguridad")
      let fechavencimiento = document.getElementById("vencimiento") 
      let numcuenta = document.getElementById("nroCuenta")
      let mjmetododepago = document.getElementById("invalidmetododepago") 
      let radio1tarjeta = document.getElementById("tarjetaCredito") 
      let radio2transferencia = document.getElementById("transBancaria") 
      let exitocompra = document.getElementById("successalert")


      if (radio1tarjeta.checked && numtarjeta.value === '' && codseguridad.value !== '' && fechavencimiento !== ''){
        event.preventDefault();
        mjmetododepago.innerHTML = 'Añadir número de tarjeta';
        mjmetododepago.classList.add('danger');
      }

      else if (radio1tarjeta.checked && numtarjeta.value !== '' && codseguridad.value === '' && fechavencimiento !== ''){
        event.preventDefault();
        mjmetododepago.innerHTML = 'Añadir código de seguridad';
        mjmetododepago.classList.add('danger')
      }

      else if (radio1tarjeta.checked && numtarjeta.value !== '' && codseguridad.value !== '' && fechavencimiento === ''){
        event.preventDefault();
        mjmetododepago.innerHTML = 'Añadir fecha de vencimiento';
        mjmetododepago.classList.add('danger')
      }

      else if (radio1tarjeta.checked && numtarjeta.value === '' && codseguridad.value === '' && fechavencimiento !== ''){
          event.preventDefault();
          mjmetododepago.innerHTML = 'Añadir número de tarjeta y código de seguridad';
          mjmetododepago.classList.add('danger')
        }

      else if (radio1tarjeta.checked && numtarjeta.value !== '' && codseguridad.value === '' && fechavencimiento === ''){
          event.preventDefault();
          mjmetododepago.innerHTML = 'Añadir código de seguridad y fecha de vencimiento';
          mjmetododepago.classList.add('danger')
        }
      else if (radio1tarjeta.checked && numtarjeta.value === '' && codseguridad.value !== '' && fechavencimiento === ''){
          event.preventDefault();
          mjmetododepago.innerHTML = 'Añadir número de tarjeta y fecha de vencimiento';
          mjmetododepago.classList.add('danger')
        }

        

      else if (radio2transferencia.checked && numcuenta.value === ''){
          event.preventDefault();
          mjmetododepago.innerHTML = 'Añadir número de cuenta';
          mjmetododepago.classList.add('danger')
        }

      else if(!radio1tarjeta.checked && !radio2transferencia.checked){
          event.preventDefault();
          mjmetododepago.innerHTML = 'Añadir método de pago';
          mjmetododepago.classList.add('danger')
        }

        else{
          exitocompra.innerHTML = innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
  ¡Has comprado con éxito!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
        }
      }
    )


//get data appProd
getJSONData(usuario25801).then(function (resultObj) {
    cartProd = resultObj.data;
      ObjProd = cartProd.articles;
      appProduct (ObjProd);
    }
  );

