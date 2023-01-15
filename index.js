const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo")(session);
const saasMiddleware = require('npm-node-sass-middleware')

app.use
app.use(express.static("./assets"));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//setup views
app.set("view engine", "ejs");
app.set("views", "./views");

//mongo store is used to store session cookie into the db
app.use(
  session({
    name: "social",
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err) || "connect-mongodb setup ok";
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on Port:${port}`);
});
