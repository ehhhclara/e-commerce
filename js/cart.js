const usuario25801 = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;
let cartProd ={};




function appProduct (product){

for ( i = 0; i < product.length; i++) {

    document.getElementById("cartTab").innerHTML +=`
    <th scope="row"><img src="${product[i].image}" width="70px"/></th>
    <td>${product[i].name}</td>
    <td id="precioUnitario">${product[i].unitCost}</td>
    <td><input  id="inputCantidad" onclick="subTotal()" type="number" value="${product[i].count}" min="1"/></td>
    <td class="col-2" id="precioTotal">${product[i].unitCost}</td>`
      
      }
      
    };

    function subTotal(){
        let cantidad = document.getElementById("inputCantidad").value;
        let precio = document.getElementById("precioUnitario");
        let preciotxt = precio.innerText;
        let precioFinal = document.getElementById("precioTotal");
        precioFinal.innerHTML = cantidad * parseInt(preciotxt);
    };


getJSONData(usuario25801).then(function (resultObj) {
    cartProd = resultObj.data;
      ObjProd = cartProd.articles;
      appProduct (ObjProd);
    }
  );

