
// const amigos = (num1,num2) =>{
//     let suma1 = 0;
//     let suma2 = 0;
//     for(let i = 1;i < num1; i++){
//         if(num1 % i === 0){
//             suma1+= i ;
//         }
//     }
//     for(let i = 1;i < num2; i++){
//         if(num2 % i === 0){
//             suma2+= i ;
//         }
//     }
//     if(suma1 === num2 && suma2 === num1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// let num1 = 220;
// let num2 = 284;
// let resultado = amigos(num1,num2);
// console.log(resultado );


// numeros perfectos--------------------------------------------

// const perfecto = (num) =>{
//     let suma = 0;
//     for(let i = 1;i < num; i++){
//         if(num % i === 0){
//             suma+= i ;
//         }
//     }
//     if(suma === num){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let num = 6;
// let resultado = perfecto(num);
// console.log(resultado);

//sumar dos numeros sin el signo de sumar-----------------------------

const suma = (a,b) =>{
    return a-(-b)
}

a = 2;
b = 3;
let sumatoria = suma(a,b);
console.log(sumatoria);
