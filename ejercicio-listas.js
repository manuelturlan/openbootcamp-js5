let buyList = ["Pan", "Lechuga", "Tomate", "Arroz", "Leche"];

buyList.push("Aceite de Girasol");
buyList.pop();

console.log(buyList);

let favoriteMovies = [
    { title: "La teoría del todo", director: "James Marsh", release: 2014 },
    { title: "Interestellar", director: "Christopher Nolan", release: 2014 },
    { title: "Una mente brillante", director: "Ron Howard", release: 2001 },
];

let filterMovies = favoriteMovies.filter((value) => {
    return value.release >= 2010;
});

console.log(filterMovies);

let filmDirector = favoriteMovies.map((values => {
    return values.director;
}))

console.log(filmDirector);

let filmTitles = favoriteMovies.map((values => {
    return values.title;
}))

console.log(filmTitles);

let directorTitles = filmDirector.concat(filmTitles);

console.log(directorTitles)

let directorTitlesSpread = [...filmDirector, ...filmTitles]

console.log(directorTitlesSpread)