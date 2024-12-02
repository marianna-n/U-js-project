"use strict";

let personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (this.numberOfFilms == '' || this.numberOfFilms == null || isNaN(this.numberOfFilms)) {
            this.numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFIlm: function () {
        for (let i = 0; i < 2; i++) {
            let questionFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
            let rangFilm = prompt("На сколько оцените его?", "");
            if (questionFilm === null || questionFilm === '' || questionFilm.length > 50 || rangFilm === null || rangFilm === '' || rangFilm.length > 50) {
                i--;
            } else {
                this['movies'][questionFilm] = rangFilm;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (this.privat === false) {
            console.log(personalMoviDB);
        }
    },
    writeYourGenres: function () {
        // let question;
        // for (let i = 0; i < 3; i++) {
        //     question = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        //     if (question != null && question != '') {
        //         this.genres[i] = question;
        //     } else {
        //         i--;
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
            if (genre != null && genre != '') {
                this.genres = genre.split(', ');
                this.genres.sort();
            } else {
                console.log("Вы ввели некорректное значение.");
                i--;
            }
        }

        this.genres.forEach(function (element, index) {
            console.log(`Любимый жанр #${index + 1} - это ${element}`);
        })
    },
    toggleVisibleMyDB: function () {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
}

personalMoviDB.writeYourGenres();
console.log(personalMoviDB);
