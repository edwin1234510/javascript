// let respuesta = (true) ? "verdadero" : "false"; //ternario
// console.log(respuesta); 



let dia = 1;
switch  (dia){
    case  1:
        console.log("lunes");
        break;
    case  2:
        console.log("martes");
        break;
    case  3:
        console.log("miercoles");
        break;
    case  4:
        console.log("jueves");
        break;
    case  5:
        console.log("viernes");
        break;
    case  6:
        console.log("sabado");
        break;
    case  7:
        console.log("domingo");
        break;
    case dia < 1:
        console.log("no existe");
        break;
    case dia > 7:
        console.log("no existe");
        break;
}
