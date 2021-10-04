export default class Page {
  constructor({ title }) {
    this.title = title;
    this.posts = {}
  }
  createPost(post){
    if (this.posts[post.id]) {
      throw new Error("Post with this id already exists. Can't create post.");
    }
    this.posts[post.id] = post
  }
}
