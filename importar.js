import { esPrimo,llenado } from "./exportar";

let numero = parseInt(prompt("ingrese un número"));
let respuesta =  esPrimo(numero);
let resllenado = llenado(numero);
alert(respuesta)
alert(resllenado)