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
const user3 = new User({userName: "Claire"})
const post1 = new Post({title: "Group distribution", text: "We are really nailing this distribution 😅"})
const post2 = new Post({title: "Individualism FTW", text: "Teamwork, dream work"})
const comment1 = new Comment({text: "Oh yeah haha"})
const comment2 = new Comment({text: "Smurfs lol"})

forum.createNewPage(page1)
forum.createNewPage(page2)
forum.createNewUser(user1)
forum.createNewUser(user2)
forum.createNewUser(user3)

forum.users[user1.id].writePost(post1,forum.pages[page1.id])
forum.users[user1.id].writePost(post2, forum.pages[page1.id])
forum.users[user1.id].writeComment(comment1, post1)
forum.users[user1.id].writeComment(comment2, post1)



// console.log(forum)
// console.log(forum.pages[page.id])
console.log(page1)
// console.log(forum.users)
// console.log(forum.pages)