export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = 'Gianni Santucci';
    this.address = 'Madrid';
  }
}

//Declaramos a ironman como persona esa constante identifica como si Persona fuese una interfaz
const ironman = new Person();
console.log(ironman);
