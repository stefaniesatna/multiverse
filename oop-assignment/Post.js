export default class Post {
    constructor({id, pageId, title = "Untitled", author, text=""}){
        this.id = id
        this.pageId = pageId
        this.title = title
        this.date = new Date()
        this.author = author
        this.text = text
        this.comments = {}
    }
}