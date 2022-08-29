const input1 = document.querySelector('#numero1')
const input2 = document.querySelector('#numero2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit',sumarInput)
 
function sumarInput(event){
    event.preventDefault();
    const sumaInput = parseFloat(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " +sumaInput;
}