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

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length;
  console.log(howManyChildren);
};

printChildren(passenger2);
