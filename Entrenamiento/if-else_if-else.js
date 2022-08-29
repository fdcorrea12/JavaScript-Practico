
function suscripction(tipo){
    if (tipo === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
    }
    if (tipo === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if (tipo === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if (tipo ===  "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

suscripction('Free')


const typeTheSuscription = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};


function suscripction(tipo){
    if (typeTheSuscription[tipo]) {
        console.log(typeTheSuscription[tipo]);
        return;
    }
    console.warn('Ese tipo de susripción no existe');

}