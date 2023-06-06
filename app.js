/**
 * Create a Hamster class with the following requirements met:

Attributes:

owner - string, initially set as an empty string.
name - string, set the name from a parameter in the constructor method.
price - integer, set as 15.
Methods:

wheelRun() - log "squeak squeak".
eatFood() - log "nibble nibble".
getPrice() - return the price.
 */
class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        console.log(`${this.price}`);
    }
}
const returnHamster = new Hamster("Fluffy");

console.log(returnHamster.owner);
console.log(returnHamster.name);
console.log(returnHamster.price);

returnHamster.wheelRun();
returnHamster.eatFood();
returnHamster.getPrice();