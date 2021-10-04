import Comment from "./Comment.js"
import Post from "./Post.js"

test("createComment() creates comment in comments object", () => {
    const post = new Post({title: "Super cool ride", text: "Look at this twisty ride"})
    const c = { text: "This is so cool" }
    const comment = new Comment(c)
    const expectedComment = new Comment(c)
    expectedComment.id = 1

    post.createComment(comment)
    
    expect(post.comments[comment.id]).toBeDefined()
    expect(post.comments[comment.id]).toEqual(expectedComment)
})

test("createComment() increments commentsMaxId", () => {
  const post = new Post({
    title: "Super cool ride",
    text: "Look at this twisty ride",
  });
  const c = { text: "This is so cool" };
  const comment = new Comment(c);

  post.createComment(comment);

  expect(post.maxCommentId).toBe(1);
});