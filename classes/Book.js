export default class Book {
    constructor(title, author, latestEdition){
        this.title = title
        this.author = author
        this.latestEdition = latestEdition
    }
    newEdition(){
        this.latestEdition++
    }
}