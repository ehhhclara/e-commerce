
const ORDER_ASC_BY_COST = "ASC";
const ORDER_DESC_BY_COST = "DESC";
const ORDER_BY_REL = "Rel";
let productlist = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;



function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    } if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    } if (criteria === ORDER_BY_REL){
        result = array.sort(function(a, b) {
            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}


function showProductslist(){
    let htmlContentToAppend = "";
    for (let i = 0; i < productlist.length; i++) {
        let product = productlist[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){
            
            
        // HTML 
        htmlContentToAppend += `
        <div onclick="setProID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                <div class="col-3" >
                    <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                </div>
                <div class="col"> 
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                        <small class="text-muted">${product.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${product.description}</p>
                </div>
            </div>
        </div>
        `
            }
            
            document.getElementById("productli").innerHTML = htmlContentToAppend;
    }
};

function setProID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
};


function sortAndShowProductslist(sortCriteria, productListArray){
    currentSortCriteria = sortCriteria;
    if(productListArray != undefined){
        productlist = productListArray;
    }
    productlist = sortProducts(currentSortCriteria, productlist);
showProductslist();
};



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProductslist(ORDER_ASC_BY_COST, resultObj.data.products);
        } 
    });

    document.getElementById("ordAsc").addEventListener("click", function(){
        sortAndShowProductslist(ORDER_ASC_BY_COST);
    });

    document.getElementById("ordDesc").addEventListener("click", function(){
        sortAndShowProductslist(ORDER_DESC_BY_COST);
    });

    document.getElementById("ordByCount").addEventListener("click", function(){
        sortAndShowProductslist(ORDER_BY_REL);
    });

    document.getElementById("ProdclearRangeFilter").addEventListener("click", function(){
    document.getElementById("ProdrangeFilterCountMin").value = "";
    document.getElementById("ProdrangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProductslist();
});

        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        document.getElementById("ProdrangeFilterCount").addEventListener("click", function(){
    minCount = document.getElementById("ProdrangeFilterCountMin").value;
    maxCount = document.getElementById("ProdrangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showProductslist();
});
});


