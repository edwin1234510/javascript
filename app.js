
//variables--------------------------------
var saludo = "Hola mundo";
let adso = "2894667";
const DNI = 1099738581;
console.log(saludo);
console.log(adso);
{
    let adso = "edwin";
    console.log(adso);
    var saludo = "adios mundo";
    console.log(saludo);
}
console.log(adso);
console.log(DNI);
console.clear();

//cadenas de texto string----------------------------
let nombre = "edwin";
let apellido = "villabona";
console.log(length);
// console.log(nombre[2]);
let nCompleto = nombre + " " +apellido;
console.log(nCompleto.toUpperCase());
console.log(nCompleto.includes("santi"));
console.clear();

//las plantillas de cadenas texto-------------------------
let item1 = "item 1";
let item2 = "item 2";
let item3 = "item 3";
let item4 = "item 4";
let item5 = "item 5";
let item6 = "item 6";

let lista = `<ul>
<li>${item1}</li>
<li>${item2}</li>
<li>${item3}</li>
<li>${item4}</li>
<li>${item5}</li>
<li>${item6}</li>
</ul>`;
console.log(lista);
console.clear();
//Number----------------------------------------------------
let entrada = prompt("ingrese el numero");
let uno = 1;
let dos = new Number(2); //tambien es posible hacer como un objeto
let tres = "3.5";
console.log(uno);
console.log(dos);
let flotante = 9.9999; 
console.log(flotante.toFixed(1));
console.log(tres);
let nuevo = console.log(parseFloat(tres));
console.log(entrada);
alert (entrada);
let respuesta = confirm("quieres seguir");
console.log(typeof tres === "number");
console.clear();






