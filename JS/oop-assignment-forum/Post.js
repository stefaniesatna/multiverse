import TextAddition from "./TextAddition.js";

export default class Post extends TextAddition{
  constructor({ id, text, title }) {
    super({id, text})
    this.title = title;
    this.comments = {};
  }
}
