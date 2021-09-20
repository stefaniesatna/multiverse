import Forum from "./Forum.js"
import Page from "./Page.js"

test("createUser() adds a user to users object", () => {
    const forum = new Forum()
    const user = {id: 1, userName: "Bilbo Baggins"}
    forum.createUser(user)
    expect(forum.users[user.id]).toBeDefined()
    expect(forum.users[user.id]).toEqual({id: 1, userName: "Bilbo Baggins"})
})

test("createUser() doesn't allow to rewrite an existing userId", () => {
    const forum = new Forum()
    const user = {id: 1, userName: "Bilbo Baggins"}
    const error = new Error("User with this id already exists, can't create user")
    forum.createUser(user)
    expect(() => forum.createUser(user)).toThrow(error)
})

test("createPage() adds a page to pages object", () => {
    const forum = new Forum()
    const page = {id: 1, title: "Dragon slaugther tips and tricks"}
    forum.createPage(page)
    expect(forum.pages[page.id]).toBeDefined()
    expect(forum.pages[page.id]).toEqual(new Page(page.id, page.title))
})

test("createPage() doesn't allow to rewrite an existing pageId", () => {
    const forum = new Forum()
    const page = {id: 1, title: "Dragon slaugther tips and tricks"}
    const error = new Error("page with this id already exists, can't create page")
    forum.createPage(page)
    expect(() => forum.createPage(page)).toThrow(error)
})

test("createPage() doesn't allow to create a page with a title that already exists", () => {
    const forum = new Forum()
    const page1 = {id: 1, title: "Dragon slaugther tips and tricks"}
    const page2 = {id: 2, title: "Dragon slaugther tips and tricks"}
    const error = new Error("page with this title already exists, can't create page")
    forum.createPage(page1)
    expect(() => forum.createPage(page2)).toThrow(error)
})

test("deleteUser() deletes User", () => {
    const forum = new Forum()
    forum.createUser({id: 1, userName: "Bilbo Baggins"})
    forum.deleteUser(1)
    expect(forum.users[1]).toBeUndefined()
})

// TODO: test("deleteUser() deletes all users posts")
// TODO: test("deleteUser() deletes all users comments")
// TODO: test("deleteUser() removes the user from page")
// TODO: test("deleteUser() returns undefined when passed an id that doesn't exist in users")

test("deletePage() deletes page", () => {
    const forum = new Forum()
    const page = {id: 1, title: "Dragon slaugther tips and tricks"}
    forum.createPage(page)
    forum.deletePage(1)
    expect(forum.pages[1]).toBeUndefined()
})

