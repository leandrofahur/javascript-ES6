/*
 * @title - song.js
 * @descriprion - homework #1: data types
 *
 */

const artist = "Dan Mangan"; // string type
const songTitle = "Troubled Mind"; // string type
const album = "More or Less"; // string type
const releasedYear = "2018"; // string type
const releasedMonth = "Jun."; // string type

const releasedMonthYear = []; // array type
releasedMonthYear.push(releasedMonth); // adding into array
releasedMonthYear.push(releasedYear);

const duration = 188; // number type (expressing seconds)
const isAwesome = true; // boolean type

// object type:
const songMetaDataObject = {
  artist: artist,
  songTitle: songTitle,
  album: album,
  releasedMonthYear: releasedMonthYear,
  duration: duration,
  isAwesome: isAwesome,
};

// printing all types:

console.log(artist);
console.log(songTitle);
console.log(album);
console.log(releasedYear);
console.log(releasedMonth);
console.log(releasedMonthYear);
console.log(duration);
console.log(isAwesome);
console.log(songMetaDataObject);
