const express = require("express");
const { get } = require("express/lib/response");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// ----------------debut de l'exercice---------------
app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

const film = (req, res) => {
  const id = parseInt(req.params.id);
  let idFilm = "";

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      idFilm = movies[i];
    }
  }
  if (idFilm) {
    res.status(200).json(idFilm);
  } else {
    res.sendStatus(404);
  }
};

app.get("/api/movies/:id", film);

// --------------------------fin de l'exercice-----------------------

app.get("/index", (req, res) => {
  res.send("je suis dans l'index");
});

const WelcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", WelcomeName);

module.exports = app;
