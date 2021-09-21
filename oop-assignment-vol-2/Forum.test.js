import Forum from "./Forum.js"
import Page from "./Page.js"

test("createNewPage() creates new page in pages object", () => {
  const p = {id: 1, title: "Multiverse"}
  const forum = new Forum()
  const page = new Page(p)
  forum.createNewPage(page)
  expect(forum.pages[page.id]).toBeDefined()
  expect(forum.pages[page.id]).toEqual(new Page(p))
})
