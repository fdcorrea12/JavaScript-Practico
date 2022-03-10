//const precioOriginal =120;
//const descuento = 18;

//const porcentajeDescuento =  100 - descuento;
//const precioConDescuento = (precioOriginal * (porcentajeDescuento)/100)



function calcularPrecioDecuento(precio, descuento){
    const porcentajeDescuento =  100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento/100);
    
    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioDecuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son :$" + precioConDescuento;
}

const cuponesDiscount =[
        "Compras",
        "Aliados",
        "Venta",
    ];

function priceDiscountCupon(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const cuponPrice = document.getElementById("inputCupones")
    const cuponValue = cuponPrice.value;

    let discount;

    switch(cuponValue){
        case cuponesDiscount[0]:
            discount = 10;
        break;
        case cuponesDiscount[1]:
            discount = 20;
        break;
        case cuponesDiscount[2]:
            discount = 30;
        break;
    }

    const precioConDescuento = calcularPrecioDecuento(priceValue, discount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son :$" + precioConDescuento;
}



//console.log({precioOriginal,descuento,porcentajeDescuento,precioConDescuento});