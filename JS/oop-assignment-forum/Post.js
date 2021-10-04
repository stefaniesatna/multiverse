import TextAddition from "./TextAddition.js";

export default class Post extends TextAddition{
  constructor({ id, text, title }) {
    super({id, text})
    this.title = title;
    this.comments = {};
  }
  
  createComment(comment){
    if (this.comments[comment.id]) {
      throw new Error(
        "Comment with this id already exists. Can't create comment."
      );
    }

    this.comments[comment.id] = comment
  }
}
