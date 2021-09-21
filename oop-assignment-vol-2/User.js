export default class User {
    constructor({id, userName}){
        this.id = id
        this.userName = userName
        this.posts = {}
    }
    writePost(post, page){
        page.posts[post.id] = post
    }
    writeComment(comment, post){
        post.comments[comment.id] = comment
    }
}