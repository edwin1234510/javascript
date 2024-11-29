let palabra = ` Un párrafo es culpa un conjunto de oraciones articuladas entre sí temáticamente. Esta articulación 
está dada por relaciones lógicas que dan culpa una unidad 823 de sentido al párrafo. Ahora bien, los párrafos que componen un 
texto pueden ser de distintos tipos `

// i = no distingue entre mayúsculas y minúsculas.
// g = encuentra todas las coincidencias

let regex = /^([0-9]{2,6}).+([a-z]{4,6})$/g;

console.log(regex.test(palabra));
// console.log(regex.exec(palabra));
console.log(palabra.match(regex));

// function buscar(regex,palabra){
//     if (palabra.includes(regex)){
//         return true;
//     }
//     return false;
// }
// console.log(buscar(regex,palabra));
