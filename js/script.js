"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFIlm() {
    for (let i = 0; i < 2; i++) {
        let questionFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
        let rangFilm = prompt("На сколько оцените его?", "");
        if (questionFilm === null || questionFilm === '' || questionFilm.length > 50 || rangFilm === null || rangFilm === '' || rangFilm.length > 50) {
            i--;
        } else {
            personalMoviDB['movies'][questionFilm] = rangFilm;
        }
    }
}

rememberMyFIlm();

function detectPersonalLevel() {
    if (personalMoviDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMoviDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel()

function showMyDB(privat) {
    if (privat === false) {
        console.log(personalMoviDB);
    }
}

showMyDB(personalMoviDB.privat);

function writeYourGenres() {
    let genresAnsw;
    for (let i = 0; i < 3; i++) {
        personalMoviDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    }

}

writeYourGenres();
