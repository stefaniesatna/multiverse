# Forum Feedback

Very good work, Stefanie, impressed by this!

## Feedback

-   I like that you've made the forum its own class. I think it should be responsible
    for keeping track of maxId for user and pages and assigning them itself, in the same way
    an SQL table does. ✅
-   Post and Comment could inherit from a base class e.g. TextAddition. They're likely
    to share functionality (deleted by their author, be liked, disliked etc.)
-   `page.posts[post.id] = post;` I'd rather User called a method on the page class
    to add a new post. User shouldn't really care about Page's implementation, that's Page's
    concern. Same with `post.comments[comment.id] = comment;`. Tbh, I'd also just have the user
    pass in the input and let Page instantiate Post and Post instantiate Comment.
-   ````const userNames = Object.keys(this.users).length
        ? Object.keys(this.users).map((id) => this.users[id].userName)
        : [];

      if (userNames.some((userName) => userName === user.userName)) {
        throw new Error(
          "User with this user name already exists. Can't create user."
        );```
    ````

    think i'd wrap this in a `usernameExists(username)` method
