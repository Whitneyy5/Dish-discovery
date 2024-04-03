const express = require("express");

const app = express();
const port = 4000;

const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    subregion: "Southern Asia",
    population: 43300000,
    latlng: [33, 65],
    demonym: "Afghan",
    area: 101200,
  },
  {
    name: "Albania",
    capital: "Tirana",
    region: "Europe",
    subregion: "Southern Europe",
    population: 2070000,
    latlng: [41, 19],
    demonym: "Albanian",
    area: 3120,
  },
];

app.get("/country", (req, res) => {
  res.send(countries);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
