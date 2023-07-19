//Creo un decorador: es una simple funcion

function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = 'New property';
    hello = 'override';
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = 'Abc123';

  print() {
    console.log('Hola MUndo');
  }
}
//Definicion
console.log(SuperClass);

//Instancia de la clase
const myClass = new SuperClass();
console.log(myClass);
