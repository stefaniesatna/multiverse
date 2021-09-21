import Page from "./Page.js";
import User from "./User.js";

export default class Forum {
  constructor(users = {}, pages = {}) {
    this.users = users;
    this.pages = pages;
  }

  createUser({ id, userName }) {
    if (this.users[id]) {
      throw new Error("User with this id already exists, can't create user");
    }
    const user = new User(id, userName);
    this.users[id] = user;
  }

  createPage({ id, title }) {
    if (this.pages[id]) {
      throw new Error("page with this id already exists, can't create page");
    }
    const titles = Object.keys.length
      ? Object.keys(this.pages).map((id) => this.pages[id].title)
      : [];
    if (titles.some((t) => t === title)) {
      throw new Error("page with this title already exists, can't create page");
    }
    const page = new Page(id, title);
    this.pages[id] = page;
  }

  deleteUser(id) {
    if (this.users[id]) {
      delete this.users[id];
    } else return;
  }

  deletePage(id) {
    if (this.pages[id]) {
      delete this.pages[id];
    } else return;
  }
}
