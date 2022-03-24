// funciones Helpers o utils
function esPar(numero){
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(ValorAcumulado = 0, nuevoElemento){
            return ValorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// Calaculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad = lista[mitad- 1];
        const personaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([personaMitad, personaMitad2]);
        return mediana;
    }else{
        const personaMitad =lista[mitad];
        return personaMitad;
    }
}

//Mediana Generarl
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
//Mediana del Top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const SpliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    SpliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    "Mediana general: " + medianaGeneralCol,
    "Mediana Top 10: " + medianaTop10Col,
);