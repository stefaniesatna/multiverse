import Forum from "./Forum.js";
import Page from "./Page.js";
import User from "./User.js";

// createNewPage()

test("createNewPage() creates new page in pages object", () => {
  const forum = new Forum();
  const p = { title: "Multiverse"}
  const page = new Page(p);
  const expectedPage = new Page(p)
  expectedPage.id = 1

  forum.createNewPage(page);

  expect(forum.pages[page.id]).toBeDefined();
  expect(forum.pages[page.id]).toEqual(expectedPage);
});

test("createNewPage() throws an error when trying to create a page with a title that exists", () => {
  const forum = new Forum();
  const p1 = new Page({ title: "Multiverse" });
  const p2 = new Page({ title: "Multiverse" });

  forum.createNewPage(p1);
  expect(() => forum.createNewPage(p2)).toThrowError(
    "Page with this title already exists. Can't create page."
  );
});

test("createNewUser() creates new user in users object", () => {
  const forum = new Forum();
  const u = { userName: "Stefanie" };
  const user = new User(u);
  const expectedUser = new User(u)
  expectedUser.id = 1

  forum.createNewUser(user);

  expect(forum.users[user.id]).toBeDefined();
  expect(forum.users[user.id]).toEqual(expectedUser);
});

test("createNewUser() throws an error when trying to create a user with a userName that exists", () => {
  const forum = new Forum();
  const u1 = new User({ userName: "Stefanie" });
  const u2 = new User({ userName: "Stefanie" });

  forum.createNewUser(u1);
  expect(() => forum.createNewUser(u2)).toThrowError(
    "User with this user name already exists. Can't create user."
  );
});
