
let arrays = [1, 23, 'fabian']

function imprimirElemento(arr){
    console.log("el primer elemento del array es", arr[0]);
}

function imprimirElemento(obj){
    const arr = Object.values(obj); //convertir los valores en arreglos y poderlos iterar
    for (let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}

