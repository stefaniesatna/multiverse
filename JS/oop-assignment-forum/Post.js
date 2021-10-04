import TextAddition from "./TextAddition.js";

export default class Post extends TextAddition{
  constructor({ text, title }) {
    super({ text })
    this.title = title;
    this.comments = {};
    this.maxCommentId = 0
  }

  createComment(comment){
    const id = this.maxCommentId + 1
    comment.id = id
    this.comments[id] = comment
    this.maxCommentId++
  }
}
