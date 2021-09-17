import Author from "../classes/Author.js"
import Book from "../classes/Book.js"

test("Author sets name argument as property", () => {
    const oscar = new Author("Oscar Wilde", 1854)
    expect(oscar.name).toBe("Oscar Wilde")
})

test("Author sets yearOfBirth argument as property", () => {
    const oscar = new Author("Oscar Wilde", 1854)
    expect(oscar.yearOfBirth).toBe(1854)
})

test("Book sets title argument as property", () => {
    const dorian = new Book("The Picture of Dorian Gray", {name: "Oscar Wilde", yearOfBirth: 1854}, 10)
    expect(dorian.title).toBe("The Picture of Dorian Gray")
})

test("Book sets author argument as property", () => {
    const dorian = new Book("The Picture of Dorian Gray", {name: "Oscar Wilde", yearOfBirth: 1854}, 10)
    expect(dorian.author).toEqual({name: "Oscar Wilde", yearOfBirth: 1854})
})

test("Book sets latest edition argument as property", () => {
    const dorian = new Book("The Picture of Dorian Gray", {name: "Oscar Wilde", yearOfBirth: 1854}, 10)
    expect(dorian.latestEdition).toBe(10)
})

test("newEdition() should increment latestEdition", () => {
    const dorian = new Book("The Picture of Dorian Gray", {name: "Oscar Wilde", yearOfBirth: 1854}, 10)
    dorian.newEdition()
    expect(dorian.latestEdition).toBe(11)
})