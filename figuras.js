// Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Lados del cuadrado mide: " + ladoCuadrado +"cm");


function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrada(lado){
    return lado * lado;
}
//console.log("El Area del Cuadrado es: " + areaCuadrada +"cm^2");

console.groupEnd;

//Codigo del triangulo

console.group("Triangulos");
//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
 //   "los lados de mi triangulo miden: "
   // +ladoTriangulo +"cm, "
    //+ladoTriangulo2+"cm, "
    //+ baseTriangulo+"cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: "+alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo +"cm");

function areaTriangulo(base ,altura){
    return (base*altura) / 2;
}

//console.log("El area del triangulo es: " + areaTriangulo+"cm^2");

console.groupEnd;

// codigo del circulo

console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm2");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//console.log("El diametro del circulo es: " + diametroCirculo + "cm2");

//pi
//const pi = Math.PI;
//console.log("El radio del circulo es: " + pi);

//Cuircunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm2");
//area
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd;
//Funciones para el cuadrado

function calcularPerimetroCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calularAreaCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
};

//Funciones para el Triangulo
function calcularPerimetroTriangulo(){
    const inputLadoUno =document.getElementById("inputTrianguloLadoUno");
    const inputLadoDos = document.getElementById("inputTrianguloLadoDos");
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueLadoUno = Number(inputLadoUno.value);
    const valueLadoDos = Number(inputLadoDos.value);
    const valueBase = Number(inputBase.value);
    
    const perimetro = perimetroTriangulo(valueLadoUno,valueLadoDos,valueBase);
    alert(perimetro);
};

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura");

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase ,valueAltura);
    alert(area);
};

//Calculos de el circulo
function calularDiametroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const diametro = diametroCirculo(valueRadio);
    alert(diametro); 
}


function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);

}

function calularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(area);
}