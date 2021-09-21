import User from "./User.js"
import Page from "./Page.js"
import Post from "./Post.js"
import Comment from "./Comment.js"

// writePost()

test("writePost() creates new post in posts object on page", () => {
    const p = { id: 1, title: "Grouping", text: "We're really nailing the distribution 😅"}
    const post = new Post(p)
    const page = new Page({ id: 1, title: "Multiverse" })
    const user = new User({ id: 1, userName: "Stefanie" })

    user.writePost(post, page)
    expect(page.posts[post.id]).toBeDefined()
    expect(page.posts[post.id]).toEqual(new Post(p))
})

test("writePost() throws an error when trying to write a post with existing id", () => {
    const post1 = new Post({ id: 1, title: "Grouping", text: "We're really nailing the distribution 😅" })
    const post2 = new Post({ id: 1, title: "Ungrouping", text: "We're really not nailing the distribution 😢" })
    const page = new Page({ id: 1, title: "Multiverse" })
    const user = new User({ id: 1, userName: "Stefanie" })
  
    user.writePost(post1, page);
    expect(() => user.writePost(post2, page)).toThrowError(
        "Post with this id already exists. Can't create post.")
})

// writeComment()

test("writeComment() creates new comment in comments object on post", () => {
    const c = { id: 1, text: "Yeah haha"}
    const comment = new Comment(c)
    const post = new Post({ id: 1, title: "Grouping", text: "We're really nailing the distribution 😅" })
    const user = new User({ id: 1, userName: "Stefanie" })

    user.writeComment(comment, post)
    expect(post.comments[comment.id]).toBeDefined()
    expect(post.comments[comment.id]).toEqual(new Comment(c))
})

test("writeComment() throws an error when trying to write a comment with existing id", () => {
    const comment1 = new Post({ id: 1, title: "Grouping", text: "We're really nailing the distribution 😅" })
    const comment2 = new Post({ id: 1, title: "Ungrouping", text: "We're really not nailing the distribution 😢" })
    const post = new Post({ id: 1, title: "Grouping", text: "We're really nailing the distribution 😅" })
    const user = new User({ id: 1, userName: "Stefanie" })
  
    user.writeComment(comment1, post);
    expect(() => user.writeComment(comment2, post)).toThrowError(
        "Comment with this id already exists. Can't create comment.")
})

