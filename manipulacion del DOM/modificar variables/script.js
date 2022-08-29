const h1 = document.querySelector('h1'); // para seleccionar la etiqueta que necesitamos 
const p  = document.querySelector('p'); // para seleccionar la etiqueta que necesitamos
const parrafito = document.getElementsByClassName('parrafo'); // para seleccionar la clase con .nombreclase
const pid = document.getElementById('pid'); // para seleccionar el id con .nombreID
const input = document.querySelector('input');


console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "patito <br> feo"; //cambiar todo html
h1.innerText = "patito <br> feo"; //Escribir solo texto


//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('atrib');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value ="456"


const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-T3l4BrGpDBL7nFO2-sXikEvtXOORtnNsw&usqp=CAU');
console.log(img)

pid.innerHTML=""
pid.append(img)