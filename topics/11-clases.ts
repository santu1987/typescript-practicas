export class Person {
  /*
  public name: string;
  private address: string;
  //COmo se hace de forma redunante
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }*/
  //asignando los valores en la misma declaracion De esta misma forma se realiza la inyección de dependencias en angular
  constructor(public name: string, private address: string = 'No Address') {}
}

//Declaramos a ironman como persona esa constante identifica como si Persona fuese una interfaz
const ironman = new Person('Ironman', 'new york');
console.log(ironman);
