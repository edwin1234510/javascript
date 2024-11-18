
//funciones declaradas-----------------------------------------------------
// function nombre1(parametro){
//     console.log(parametro);
// }
// nombre1(4);

// function nombre2(parametro){
//     return parametro;
// }
// nombre2();

// let respuesta = nombre3(20);
// function nombre3(parametro){
//     return parametro;
// }
// nombre2(respuesta);


//funciones expresadas----------------------------------------------------
// let esPrimo = function(numero){
//     let contador = 0;
//     for(let i = 1;i <= numero; i++){
//         if (numero % i === 0){
//             contador++;
//         }
//     }
//     if(contador > 2){
//         return "no es número primo";
//     } else if(contador==2){
//         return "es un número primo";
//     }else{
//         return "no es número primo";
//     }
// }
// let numero = parseInt(prompt("ingrese el número"));
// console.log(esPrimo(numero));

//funciones anonimas------------------------------------------------------
// const anonima =function (valor){
//     console.log(valor);
// }
// let respuesta = anonima(25);
// console.log(respuesta);

//funciones geberadora---------------------------------------------------
// const generar = function* nombre(){
//     yield 1;
//     yield 2;
// }
// console.log(generar.next());

//funcion anonima auto ejecutable------------------------------------------
// let parametro = 25;
// (function(){
//     alert("si llamamos");
// })();

//arrow funcion-------------------------------------------------------------
// const flecha = (a,b) => {
//     if (a > 20)return a * b;
//     return b;
// }
// let respuesta = flecha(21,5);
// console.log(respuesta);
