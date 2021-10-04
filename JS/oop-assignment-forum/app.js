import Forum from "./Forum.js"
import Page from "./Page.js"
import User from "./User.js"
import Post from "./Post.js"
import Comment from "./Comment.js"

const forum = new Forum()
const page1 = new Page({title: "Multiverse"})
const page2 = new Page({title: "Facebook"})
const user1 = new User({userName: "Stefanie"})
const user2 = new User({userName: "Christie"})
const post1 = new Post({id: 1, title: "Group distribution", text: "We are really nailing this distribution 😅"})
const comment = new Comment({id: 1, text: "Oh yeah haha"})

forum.createNewPage(page1)
forum.createNewPage(page2)
forum.createNewUser(user1)
forum.createNewUser(user2)

forum.users[user1.id].writePost(post1,forum.pages[page1.id])

// console.log(forum)
// console.log(forum.pages[page.id])
console.log(comment)
// console.log(forum.users)
// console.log(forum.pages)