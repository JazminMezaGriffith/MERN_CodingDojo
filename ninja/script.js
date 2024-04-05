class Ninja {
    constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`El nombre de este ninja es ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre} | Fuerza: ${this.fuerza} | Velocidad: ${this.velocidad} | Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y su salud aumentó a ${this.salud}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


// Core: Super Ninja
class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`${this.nombre} dice: Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
