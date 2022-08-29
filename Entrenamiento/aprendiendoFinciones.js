function nombre (name, lastName, nickname){
    completeName = name +" "+ lastName;
    
    console.log("Mi nombre es "+ completeName +", pero prediero que me digas " + nickname)
}

nombre("Fabian David", "Correa Garcia", "Mono")

console.log(tipoDeSuscripcion("Basic"))

function tipoDeSuscripcion(tipo) {
   if (tipo === "Free") {
       console.log("Solo puedes tomar los cursos gratis");
   }
   else if (tipo === "Basic") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
   else if (tipo === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
   else if (tipo ===  "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

let respuesta;
while (respuesta != '10'){
    let pregunta = prompt('¿cuanto es 5 * 2?')
    if (respuesta === pregunta){
        console.log("Tu respuesta es correcta vete sacaste 5")
    }else{
        console.log("pero eres malo para la matematica muchacho")
    }
}