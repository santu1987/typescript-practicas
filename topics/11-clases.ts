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

//Extendiendo una clase

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    //cons super se hace referencia a los atributos que se manejan en la clase a la cual se extiende nombre y direccion. SIn embargo se pueden crear nuevos campos como los señalados arriba y se crea el objeto con ellos
    super(realName, 'New York');
  }
}

const batman = new Hero('Batman', 45, 'Bruce Wayne');
console.log(batman);

//Priorizando la composicion:
//En vez de crear una clase heroPErson que extiende de persona creamos una clase y le pasamos un atributo mas como el objeto persona.
//Con la finalidad de facilitar el uso de las clase evitando herencia
export class HeroPerson {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const clark = new Person('Clark Kent', 'Metropolis');
const superman = new HeroPerson('Superman', 35, 'CLark', clark);
console.log(superman);
