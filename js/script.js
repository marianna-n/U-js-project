"use strict";


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let questionFilm,
    rangFilm;

let personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    questionFilm = prompt("Один из последних просмотренных фильмов?", "");
    rangFilm = prompt("На сколько оцените его?", "");
    if (questionFilm === null || questionFilm === '' || questionFilm.length > 50 || rangFilm === null || rangFilm === '' || rangFilm.length > 50) {
        i--;
    } else {
        personalMoviDB['movies'][questionFilm] = rangFilm;
    }
}

if (personalMoviDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMoviDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


console.log(personalMoviDB);
