import User from "./User.js";
import Forum from "./Forum.js";
import Post from "./Post.js";

let user = { id: 1, userName: "Bilbo Baggins" };
let page = { id: 1, title: "Dragon slaugther tips and tricks" };

const forum = new Forum();
const post = new Post({
  id: 1,
  pageId: 1,
  title: "Anyone tried leg extensions?",
  author: user,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
});

forum.createUser(user);
forum.createPage(page.id, page.title);

user = forum.users[user.id];
page = forum.pages[page.id];

test("writePost() adds a post to user's posts property", () => {
  user.writePost(post);
  expect(user.posts[post.id]).toBeDefined();
});

// TODO: Needs a callback to be passed down 
test("writePost() adds a post to the page's posts property", () => {
    user.writePost(post)
    expect(page.posts[post.id]).toBeDefined()
});
