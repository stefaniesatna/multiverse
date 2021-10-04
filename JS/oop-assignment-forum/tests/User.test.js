import User from "../User.js"
import Page from "../Page.js"
import Post from "../Post.js"
import Comment from "../Comment.js"

test("writePost() creates new post in posts object on page", () => {
    const p = { title: "Grouping", text: "We're really nailing the distribution 😅"}
    const post = new Post(p)
    const page = new Page({ title: "Multiverse" })
    const user = new User({ userName: "Stefanie" })
    const expectedPost = new Post(p)
    expectedPost.id = 1

    user.writePost(post, page)
    expect(page.posts[post.id]).toBeDefined()
    expect(page.posts[post.id]).toEqual(expectedPost)
})

test("writeComment() creates new comment in comments object on post", () => {
    const c = { id: 1, text: "Yeah haha"}
    const comment = new Comment(c)
    const expectedComment = new Comment(c)
    expectedComment.id = 1
    const post = new Post({ title: "Grouping", text: "We're really nailing the distribution 😅" })
    const user = new User({ userName: "Stefanie" })

    user.writeComment(comment, post)
    expect(post.comments[comment.id]).toBeDefined()
    expect(post.comments[comment.id]).toEqual(expectedComment)
})
