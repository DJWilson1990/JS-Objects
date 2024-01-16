console.log("Hello Dan");

const person = {
  fName: "Daniel",
  age: 33,
  favSport: "running",
};

console.log(person); //output is Daniel 33 running
console.table(person); //gives info in a table on console

console.log(person.fName); //output is Dan
console.log(person.age); //output is 33
console.log(person.favSport); // output is running

// can add properties to object by assigning a new value to a new property:

person.favFood = "Pasta";
console.log(person.favFood);

//can use let or const
let car = {
  make: "Audi",
  model: "A1",
  color: "white",
  description: "Basically a go kart",
};

console.log(car);
console.log(car.description);

const bestAlbumEver = {
  band: "Pink Floyd",
  album: "The Dark Side of the Moon",
  description:
    "The Dark Side of the Moon is a concept album by English rock band Pink Floyd, released March 1st, 1973",
};
console.log(bestAlbumEver); //outputs band album and description
console.log(bestAlbumEver.description); //outputs jsut the description.
