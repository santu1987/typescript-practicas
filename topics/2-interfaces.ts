//Habilidades de personaje del señor de los anillos
//Si la variable no va a cambiar es un const
const skills: string[] = ['Bash', 'Counter'];

//Una interface permite tipar a un objeto
// El signo ?, es si el campo es undefined
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
  hometown: 'Caracas',
};

console.table(CredentialsContainer);
export {};
