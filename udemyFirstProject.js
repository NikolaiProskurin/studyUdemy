let numberOfFilms;

function start() {
  numberOfFilms = +prompt("how many movies have you already watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("how many movies have you already watched?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("one of the last movie what did you saw?", "").trim(),
      b = prompt("how much do you rate it?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("few movies watched");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("you are a classic spectator");
  } else if (personalMovieDB.count >= 30) {
    console.log("you are a cinephile");
  } else {
    consoles.log("error");
  }
}

// detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Your favorite genre is numbered ${i}`
    );
  }
}

writeYourGeners();
