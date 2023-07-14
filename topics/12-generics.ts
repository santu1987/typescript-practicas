//Debo de evitar argumentos del tipo any
//Con <T> significa que es un generico
//Un generico es una clase que puede tener diferentes tipos de datos al mismo parametro
export function whatsMyType<T>(argument: T): T {
  return argument;
}
//USo en la variable el tipo de dato en este caso como se va a manejar
let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join());
