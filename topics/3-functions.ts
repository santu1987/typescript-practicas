function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
  return `${a + b}`;
};
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
console.log({ result });

let multiplyResult: number = multiply(5);

export {};
