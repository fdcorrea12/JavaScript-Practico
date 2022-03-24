const lista = [
    10,
    6,
    15,
    4
];

function calcularMediaArmonica(lista){
    let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){
        sumaLista +=  1/lista[i];
    };
    const mediaArmonica =  lista.length/sumaLista;
    return mediaArmonica;
}