export default class User {
  constructor(id, userName = "anonymous") {
    this.id = id;
    this.userName = userName;
    this.posts = {};
    this.comments = {};
    this.pages = {};
  }
  writePost(post) {
    this.posts[post.id] = post;
  }
}
