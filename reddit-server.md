# Express

In this project we'll continue working on the reddit clone, news rating application. In this component, we'll build the backend system that we'll connect the front-end to our backend.

## What's in this repo

This repo contains a skeleton node/express application. In this application, you can simply run the node server:

    node server.js

## Your goals

Basic requirements

* [Y] Implement Gruntfile
* [Y] Add the User model
* [Y] Configure the express app to route the following routes:
  * /signup   - User signup. Parameters: email & password
  * /login    - User login, Params: email & password
  * /api/news     - Get the latest news
  * /api/rate     - Rate a news article (send a rating)
* [Y] Setup a UserSchema in Mongo
* [ ] Configure the express app to use passport local strategy
* [ ] Configure the express app to use passport reddit strategy
* [ ] Integrate our previous app with this one (hint: use the public/ directory)
* [ ] Setup passport token strategy (Hint: use a bearer token or an auth token)
* [ ] Setup client-side authentication with Angular router (i.e. use an interceptor and reject if the user hasn't logged in)
* [ ] Create a TokenService that stores the auth_token
* [ ] Set up the `/api/news` route to fetch the latest news from reddit
* [ ] Use the Angular `$resource` service to interact with ratings
* [ ] Install `jasmine-node`
* [ ] Test the `/api/news` and `/api/rate` route using `jasmine-node`
* [ ] Test the client-side `$resource` service to test using the live data
* [ ] Setup the `$httpMock` service to mock the API calls

Extra credit:
* [ ] Implement logout
* [ ] Implement a way for users to _submit_ stories to reddit-server
* [ ] Store the token in localStorage and persist across page refresh
* [ ] Implement the routes:
  * /api/my_ratings   - The current user's ratings
  * /api/newest       - The latest listing of stories
  * /api/hottest      - The most rated stories
* [ ] Stream the latest articles through socket.io
* [ ] Create a websocketService that consumes socket.io data
* [ ] Add a sharing system (allow users to share articles with each other)
* [ ] Add a comment system

## Links

[Passport](http://passportjs.org/guide/)
[Passport-reddit](https://github.com/Slotos/passport-reddit)

When complete, this backend will host the user accounts for the AngularJS app. It will be responsible for fetching the articles from Huffington Post and storing them locally as well as loading them for the client. It will be responsible for hosting rating data both per-user and per-article.

> Can you think of another way we could serve the articles without needing to store them in a database? (Hint: what do we *need* to store)

