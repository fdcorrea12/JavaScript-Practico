const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    5,
    4,
    3,
    3,
    4,
        
];

function calcularModa(lista1){
    const lista1Count = {};

    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
        }
    )

    const moda = listaArray[listaArray.length - 1];
    return moda;
}
