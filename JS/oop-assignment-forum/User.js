export default class User {
  constructor({ userName }) {
    this.userName = userName;
  }
  writePost(post, page) {
    page.createPost(post)
  }
  writeComment(comment, post) {
    post.createComment(comment)
    post.comments[comment.id] = comment;
  }
}