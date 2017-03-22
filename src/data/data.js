import Human from './Human.js';
import Mutant from './Mutant.js';

let leo = new Mutant("Leo", undefined, null, "Sword", "Blue", "Anchovies");
let don = new Mutant("Don", undefined, "", "Staff", "Purple", "Pineapple");
let raf = new Mutant("Raf", "Turtle", "Sewer", "Twin Sai", "Red", "Jalapino");
let mike = new Mutant("Mike", "Turtle", undefined, "Nunchucks", "Orange", "Pepperoni");
let april = new Human("April");

let data = [leo, don, raf, mike, april];

export default data;
