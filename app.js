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

/**Create a Person class with the following requirements met:

Attributes:

name - set name from a parameter in the constructor method.
age- initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
Methods:

getName() - returns name.
getAge() - returns age.
getWeight() - returns weight.
greet() - logs a message with person's name.
eat() - increment weight, increment mood.
exercise() - decrement weight.
ageUp() - increment age, increment height, increment weight, decrement mood, increment bankAccount by 10 (birthday money).
buyHamster(hamster) - push the hamster object onto the hamsters array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()). */
class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = "";
        this.bankAccount = 0
    }

    getName() {
        console.log(`${this.name}`);
    }

    getAge() {
        console.log(`${this.age}`);
    }

    getWeight() {
        console.log(`${this.weight}`);
    }

    greet() {
        console.log(`Hello ${this.name}, how are you doing?`);
    }

    eat() {
        this.weight++;
        this.mood++;
    }

    exercise() {
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}
const personLog = new Person("Aaron");

personLog.getName();
personLog.greet();

/**Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy.
Age Timmy five years.
At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
Age Timmy 9 more years.
Create a Hamster named "Gus."
Set Gus's owner to the string "Timmy."
Have Timmy "buy" Gus.
Age Timmy more 15 years.
Have Timmy eat twice.
Have Timmy exercise twice */
const timmy = new Person("Timmy");
for (let i = 0; i < 9; i++) {
    timmy.ageUp();
}

for (let i = 0; i < 5; i++) {
    timmy.eat();
}

for (let i = 0; i < 5; i++) {
    timmy.exercise();
}

for (let i = 0; i < 9; i++) {
    timmy.ageUp();
}

const gusTheHamster = new Person("Gus");
gusTheHamster.owner = "Timmy";

for (let i = 0; i < 15; i++) {
    timmy.ageUp();
}

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise();

/**Fill in these classes to meet the following requirements:

Chef should be a factory of Dinner.
Add a constructor to Dinner that sets the string properties: appetizer, entree, and dessert.
Add a method on Chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create three Dinners, log the Dinners */
class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert
    }
}

class Chef {
    dinnerForGuests(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert);
    }
}
const DinnerFromChef = new Chef();

const breakfast = DinnerFromChef.dinnerForGuests("Sambosa", "Egg", "Muffin");
console.log(breakfast);

const lunch = DinnerFromChef.dinnerForGuests("Pasti", "Beyaynetu", "Baklava");
console.log(lunch);

const dinnerTime = DinnerFromChef.dinnerForGuests("Kolo", "Doro Wott", "Black Forest Cake");
console.log(dinnerTime);


