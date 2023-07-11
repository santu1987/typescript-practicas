interface AudioPLayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPLayer: AudioPLayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Creep',
  details: {
    author: 'RadioHead',
    year: 1993,
  },
};

//destructuracion, sacar ciertos elementos de un objeto
//Primero el campo y luego el nuevo nombre
//const { song: anotherSong } = audioPLayer;
//console.log('Song', anotherSong);
//Ejemplo 2 destructuro un objeto y luego de ese objeto uso el campo que necesito...
const { details: thatDetails } = audioPLayer;
const { author: thatAuthor } = thatDetails;

console.log('details', thatDetails.author);
console.log('author', thatAuthor);

//otra forma de hacerlo : en una misma destructuración y el nombre de la variable puede ser el mismo del campo...
const { song: anotherSong, songDuration: duration, details } = audioPLayer;
const { author } = details;
console.log('Song', anotherSong);
console.log('Duration', duration);
console.log('Author', author);

export {};
