const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.sabiduría = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}



const superSensei = new Sensei("Master Splinter");
console.log(superSensei);
superSensei.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();
console.log(superSensei);