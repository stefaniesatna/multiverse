import Forum from "./Forum.js"
import Page from "./Page.js"
import User from "./User.js"
import Post from "./Post.js"
import Comment from "./Comment.js"

const forum = new Forum()
const page = new Page({id: 1, title: "Multiverse"})
const user = new User({id: 1, userName: "Stefanie"})
const post = new Post({id: 1, title: "Group distribution", text: "We are really nailing this distribution 😅"})
const comment = new Comment({id: 1, text: "Oh yeah haha"})

console.log(forum)
console.log()
console.log(page)
console.log()
console.log(user)
console.log()
console.log(post)
console.log()
console.log(comment)
console.log()