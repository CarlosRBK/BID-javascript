class Ninja {
    constructor(nombre, velocidad =3, fuerza=3, salud=100) {
        this.nombre = nombre,
        this.salud = salud,
        this.velocidad = velocidad,
        this.fuerza = fuerza;
    }
    sayName(){
        console.log("El nombre del ninja es: " + this.nombre)
    }
    showStats(){
        console.log(this.nombre+", Fuerza: "+this.fuerza+", Velocidad: "+this.velocidad+", Salud: "+ this.salud);
    }
    drinkSake(){
        this.salud+=10;
    }
}

class Sensei extends Ninja {
    constructor(nombre){
    super(nombre, 10, 10, 200);
    this.sabiduria = 10;
    };

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
};
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
