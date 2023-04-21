'use strict';

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start();

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};

function detectPersonalLevel() {
     if ( numberOfFilms < 10) {
          alert('Просмотрено довольно мало фильмов!');
          console.log('Просмотрено довольно мало фильмов!');
     } else if ( numberOfFilms >= 10 && numberOfFilms < 30) {
          alert('You are classic wather!');
          console.log('You are classic wather!');
     } else if ( numberOfFilms >= 30) {
          alert('Вы киноман!');
          console.log('Вы киноман!');
     } else {
          alert('Что-то пошло не так!');
          console.log('Что-то пошло не так!');
     };
}

detectPersonalLevel();

function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {
          const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
     
               if ( a != null && b != null & a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Done! Enter is right.');
               } else { 
                    i--;
                    console.log('Error!');
               }
     };
}

rememberMyFilms();

function showMyDB(hidden) {
     if (!hidden) {
          console.log(personalMovieDB);
     }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
     for (let i = 1; i < 4; i++) {
          personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);
     }
}

writeYourGenres();

console.log(personalMovieDB);