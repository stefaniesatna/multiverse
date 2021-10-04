export default class Forum {
  constructor() {
    this.users = {};
    this.pages = {};
    this.usersMaxId = 0
    this.pagesMaxId = 0
  }
  
  createNewPage(page) {
    if(this.pageTitleExists(page)){
      throw new Error(
        "Page with this title already exists. Can't create page."
      );
    }

    const id = this.pagesMaxId + 1;
    page.id = id;
    this.pages[id] = page;
    this.pagesMaxId++;
  }

  createNewUser(user) {

    if (this.userNameExists(user)){
      throw new Error(
        "User with this user name already exists. Can't create user."
      );
    }

    const id = this.usersMaxId + 1
    user.id = id
    this.users[id] = user;
    this.usersMaxId++
  }

  userNameExists(user){
    const userNames = Object.keys(this.users).length
    ? Object.keys(this.users).map((id) => this.users[id].userName)
    : [];

    if (userNames.some((userName) => userName === user.userName)) {
      return true
    }

    return false
  }

  pageTitleExists(page){
    const titles = Object.keys(this.pages).length
    ? Object.keys(this.pages).map((id) => this.pages[id].title)
    : [];

    if (titles.some((title) => title === page.title)) {
      return true
    }
    
    return false;
  }
}
