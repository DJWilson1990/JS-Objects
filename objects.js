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
console.log(bestAlbumEver.description); //outputs the description.

//COMPLEX OBJECTS

const myBio = {
  title: "My bio",
  author: {
    fName: "Dan",
    age: "33",
    occupation: [
      "Ski instructor",
      "Kitesurf instructor",
      "future JS developer",
    ],
  },
  tags: ["First name", "Age", "jobs"],
  content: "This is a short bio",
};

console.log(myBio.title); // output My bio
console.log(myBio.author.fName); // output Dan
console.log(myBio.author.occupation); // output lists all occupations
console.log(myBio.author.occupation[0]); // output ski instructor
console.log(myBio.author); //output Dan 33 occupation [ski instrucot, kitesurf instructor, future JS developer]
console.log(myBio.tags.length); //outputs 3. there are 3 tags in the tags array

//combined with a loop
console.log(`There are ${myBio.tags.length} tags for "${myBio.title}":`); // need to use ` back ticks. output reads :There are 3 tags for "My bio"
for (let i = 0; i < myBio.tags.length; i++) {
  console.log(myBio.tags[i]);
}
//output: First name Age jobs (from the tags section)

// can use a for of loop if dont need the index

console.log(`Tags for post "${myBio.title}":`); // output: Tags for post "My bio":
for (let tag of myBio.tags) {
  console.log(tag);
} // output First name Age jobs
