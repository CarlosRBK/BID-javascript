class Ninja {
    constructor(nombre, velocidad =3, fuerza=3) {
        this.nombre = nombre,
        this.salud = 0,
        this.velocidad = velocidad,
        this.fuerza = fuerza;
    }
    sayName(){
        console.log("El nombre del ninja es: " + this.nombre)
    }
    showStats(){
        console.log(this.nombre+" Fuerza: "+this.fuerza+" Velocidad: "+this.velocidad+" Salud: "+ this.salud);
    }
    drinkSake(){
        this.salud += 10;
        console.log("La vitalidad a aumentado a: " +this.salud)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
