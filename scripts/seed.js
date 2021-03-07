let moogose = require("mongoose");
let db = require("../models");

// moogose.connect("mongodb://localhost/dormApp_db", {                             

moogose.connect(
  "mongodb+srv://root:12345@cluster0.cuzc6.mongodb.net/dormApp_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

let dormSeed = [
  {
    wall: "heart",
    bed: "pink",
    carpet: "shag",
    art: "Picasso"
  },
  
];

// Delete the collection Robot and insert this seed.
db.Dorm.deleteMany({})
  .then(() => db.Dorm.collection.insertMany(dormSeed))
  .then((data) => {
    //Log how many insertions were made to the database.
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
