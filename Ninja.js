class Ninja {
constructor(nombre, salud, velocidad, fuerza) {
    console.log('constructor');
this.nombre = nombre;
this.salud = salud;
this.velocidad = 3;
this.fuerza = 3; 
}

sayName () {
    console.log('Nombre:' + this.nombre);

}

showStats () {
    console.log("Stats del Ninja");
    console.log("Fuerza: " + this.fuerza )
    console.log("Velocidad: " + this.velocidad )
    console.log("Salud: " + this.salud )
}

drinkSake(){
    console.log("drinkSake");
    this.salud = this.salud +10
    console.log('Nueva salud: ' + this.salud);
}

}   
const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(); 