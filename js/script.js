//const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели", "");

'use strict';

let filmList = [];
let scoreList = [];

for (let i = 0; i < 2; i++) {

    let film;
    let score;

    while (1) {
        film = prompt("Один из последних просмотренных фильмов", "");

        if (film != null && film.length != 0 && film.length < 50) {
            break;
        }
    }

    while (1) {
        score = prompt("На сколько оцениваете его", "");
        if (score != null && score.length != 0) {
            break;
        }
    }

    filmList[i] = film;
    scoreList[i] = score;
}

let numberOfFilms;

while (1) {
    numberOfFilms = +prompt("Сколько фильмов Вы посмотрели", "");
    if (numberOfFilms != 0) {
        break;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if ((personalMovieDB.count >= 10) & (personalMovieDB.count <= 30)) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман");
}

personalMovieDB.movies[filmList[0]] = scoreList[0];
personalMovieDB.movies[filmList[1]] = scoreList[1];

console.log(personalMovieDB);

/*
const lastFilm1 = prompt("Один из последних просмотренных фильмов", ""),
      score1 = prompt("на сколько оцениваете его", ""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов", ""),
      score2 = prompt("на сколько оцениваете его", "");
      */

// personalMovieDB.movies[lastFilm1] = score1;
// personalMovieDB.movies[lastFilm2] = score2;
// console.log(personalMovieDB);