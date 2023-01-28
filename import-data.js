const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Sector = require("./models/sectorModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  });

//Reading the json file..

const sectors = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));

//importing the data..

const importData = async () => {
  try {
    await Sector.create(sectors);
    console.log("data added successfully");
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

//Deleting the data..

const deleteData = async () => {
  try {
    await Sector.deleteMany();
    console.log("data deleted successfully");
  } catch (e) {
    console.log(e);
  }
  process.exit();
};

console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
