import Book from "./Book.js"
import Author from "./Author.js"

const oscarWilde = new Author({
    name: "Oscar Wilde",
    yearOfBirth: "1854"
})

const dorianGray = new Book({
    title: "Dorian Gray",
    author: oscarWilde,
    latestEdition: "2015"
})

console.log(oscarWilde)
console.log(dorianGray)