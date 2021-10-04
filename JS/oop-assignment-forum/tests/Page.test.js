import Page from "../Page.js"
import Post from "../Post.js"

test("createPost() creates post in posts object", () => {
    const p = { title: "Loving cockers", text: "They bark all day long!" }
    const page = new Page({ title: "Dogs & cats"})
    const post = new Post(p)
    const expectedPost = new Post(p)
    expectedPost.id = 1

    page.createPost(post);
    
    expect(page.posts[post.id]).toBeDefined()
    expect(page.posts[post.id]).toEqual(expectedPost)
})

test("createPost() increments postsMaxId", () => {
    const p = { title: "Loving cockers", text: "They bark all day long!" }
    const page = new Page({ title: "Dogs & cats"})
    const post = new Post(p)
    
    page.createPost(post)
    expect(page.postsMaxId).toBe(1)
})