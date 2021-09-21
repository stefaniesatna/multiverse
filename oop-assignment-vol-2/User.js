export default class User {
  constructor({ id, userName }) {
    this.id = id;
    this.userName = userName;
  }
  writePost(post, page) {
    if (page.posts[post.id]) {
      throw new Error("Post with this id already exists. Can't create post.");
    }
    page.posts[post.id] = post;
  }
  writeComment(comment, post) {
    if (post.comments[comment.id]) {
        throw new Error("Comment with this id already exists. Can't create comment.");
    }
    post.comments[comment.id] = comment;
  }
}
