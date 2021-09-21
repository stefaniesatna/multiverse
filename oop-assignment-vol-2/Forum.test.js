import Forum from "./Forum.js";
import Page from "./Page.js";
import User from "./User.js";

// createNewPage()

test("createNewPage() creates new page in pages object", () => {
  const forum = new Forum();
  const p = { id: 1, title: "Multiverse" };
  const page = new Page(p);

  forum.createNewPage(page);

  expect(forum.pages[page.id]).toBeDefined();
  expect(forum.pages[page.id]).toEqual(new Page(p));
});

test("createNewPage() throws an error when trying to create a page with existing id", () => {
  const forum = new Forum();
  const p1 = new Page({ id: 1, title: "Multiverse" });
  const p2 = new Page({ id: 1, title: "CodeCademy" });

  forum.createNewPage(p1);
  expect(() => forum.createNewPage(p2)).toThrowError(
    "Page with this id already exists. Can't create page."
  );
});

test("createNewPage() throws an error when trying to create a page with a title that exists", () => {
  const forum = new Forum();
  const p1 = new Page({ id: 1, title: "Multiverse" });
  const p2 = new Page({ id: 2, title: "Multiverse" });

  forum.createNewPage(p1);
  expect(() => forum.createNewPage(p2)).toThrowError(
    "Page with this title already exists. Can't create page."
  );
});

// createNewUser()

test("createNewUser() creates new user in users object", () => {
  const forum = new Forum();
  const u = { id: 1, userName: "Stefanie" };
  const user = new User(u);

  forum.createNewUser(user);

  expect(forum.users[user.id]).toBeDefined();
  expect(forum.users[user.id]).toEqual(new User(u));
});

test("createNewUser() throws an error when trying to create a user with existing id", () => {
  const forum = new Forum();
  const u1 = new User({ id: 1, userName: "Stefanie" });
  const u2 = new User({ id: 1, userName: "Christie" });

  forum.createNewUser(u1);
  expect(() => forum.createNewUser(u2)).toThrowError(
    "User with this id already exists. Can't create user."
  );
});

test("createNewUser() throws an error when trying to create a user with a userName that exists", () => {
  const forum = new Forum();
  const u1 = new User({ id: 1, userName: "Stefanie" });
  const u2 = new User({ id: 2, userName: "Stefanie" });

  forum.createNewUser(u1);
  console.log(forum.users);
  expect(() => forum.createNewUser(u2)).toThrowError(
    "User with this user name already exists. Can't create user."
  );
});
