export default class {
/**
 * constructor method
 * @param name The name of the human.
 * @param race our race, defaults to human.
 * @param the home of the person.
 *
 * @return the instance of the class
 */
  constructor( name, race = 'Human', home = "New York" ){
    this.name = name;
    this.race = race;
    this.home = home;
  }

  greeting(){
    return `Hi, I'm ${this.name}`;
  }
};
