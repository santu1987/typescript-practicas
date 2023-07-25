export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Fernando',
};

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Elizabeth'],
};

//Optional chaning es cuando esta haciendo referencia a un valor... como este ejemplo
const printChildren = (passenger: Passenger) => {
  //Ejemplo de optional chaining
  //SI viene muestra la propiedad y sino viene muestar undefined
  const howManyChildren = passenger.children?.length;
  //passenger.children!.length;<- indica que el campo no sera nulo, es decirle a typescript que confie en nosotros
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger2);
