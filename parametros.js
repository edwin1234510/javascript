//Parámetros Rest----------------------------

// function suma(a , b, ...c){
//     for(let i = 0; i < c.length; i++){
//         let rta = 0;
//         if(typeof (c[i])=== "number") rta =+ c[i];
//     }
//     if(typeof (a)=== "number") rta =+ a;
//     if(typeof (b)=== "number") rta =+ b;
//     return rta;
// }
// let resultado = suma("dos",9,21,1,5,4,8);
// console.log(resultado);


//operador Spread--------------------------------

const arrayA = [1,2,3];
const arrayB = ["a","b","c"];
// const arrayC = arrayA + arrayB;
// const arrayC = arrayA.concat(arrayB);
const arrayC = [...arrayA,...arrayB];
console.log(arrayC);
