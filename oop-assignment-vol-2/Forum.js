export default class Forum {
  constructor() {
    this.users = {};
    this.pages = {};
  }
  createNewPage(page) {
    if (this.pages[page.id]) {
      throw new Error("Page with this id already exists. Can't create page.");
    }

    const titles = Object.keys(this.pages).length
      ? Object.keys(this.pages).map((id) => this.pages[id].title)
      : [];

    if (titles.some((title) => title === page.title)) {
      throw new Error(
        "Page with this title already exists. Can't create page."
      );
    }

    this.pages[page.id] = page;
  }

  createNewUser(user) {
    if (this.users[user.id]) {
      throw new Error("User with this id already exists. Can't create user.");
    }

    const userNames = Object.keys(this.users).length
    ? Object.keys(this.pages).map((id) => this.pages[id].title)
    : [];

    if(userNames.some((userName) => userName === user.userName)){
        "User with this user name already exists. Can't create user."
    }
    this.users[user.id] = user;
  }
}
