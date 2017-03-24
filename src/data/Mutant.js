import Human from './Human.js';

export default class extends Human{
  /**
   * constructor method
   * @param name
   * @param race
   * @param home
   * @param weapon
   * @param color
   * @param pizzaTopping
   *
   * @return instance of the Mutant class
   */
   constructor(name, race = "Mutant", home = "Sewer", weapon, color, pizzaTopping){
     super(name, race, home);
     this.weapon = weapon;
     this.color = color;
     this.pizzaTopping = pizzaTopping;
   }

   greeting(){
     return `Cowabunga dude!!!!!!`;
   }
};
