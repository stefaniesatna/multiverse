export default class Page {
  constructor({ title }) {
    this.title = title;
    this.posts = {}
    this.postsMaxId = 0
  }

  createPost(post){
    const id = this.postsMaxId + 1
    post.id = id
    this.posts[id] = post
    this.postsMaxId++
  }
}
