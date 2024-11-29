//herencia ----------------------------------------------

class Persona{
    constructor(nombreA,apellidoA,edadA){
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
    }
    //metodos
    comer(){
        console.log(`esta comiendo  ${this.nombre}`);
    }
}
class aprendiz extends Persona{

}

const edwin = new Persona("edwin","villabona",18);
const santi = new Persona("santiago","alfonso",18);
edwin.comer();
santi.comer();


