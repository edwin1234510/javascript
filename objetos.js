const persona = {
    nombre: "edwin",
    apellido: "villabona",
    edad: 18,
    saludar:function(){
        return`hola soy ${this.nombre}`;
    }
}
persona.pais = "colombia";

persona.despedida = function(){
    return `chao se despide ${this.nombre}`
}
// console.log(persona(saludar));
// console.log(persona.despedida());

// console.log(Object.keys(persona).indexOf("nombre"));
// if (Object.keys(persona).indexOf("genero")=== -1){
//     console.log("no fue definido");
// }
console.log(Object.keys(persona).includes("edad"));

// console.log(Object.keys()); ---> para saber los atributos que tiene el objeto