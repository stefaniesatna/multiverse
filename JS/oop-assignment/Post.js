export default class Post {
  constructor({ id, title, text }) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.comments = {};
  }
}
