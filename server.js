"use strict";

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

const cookieSession = require('cookie-session'); // Use Node.js cookie-session middleware
app.use(cookieSession({ keys: ['thisisTedKey', 'ThisisLHLKey'] })); // set secret keys for cookie-session
// const authen = require('./utils/authen-helper'); // Authentication helper

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const pollsRoutes = require("./routes/polls");
const answersRoutes = require("./routes/answers");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse application/json
app.use("/styles", sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/polls", pollsRoutes(knex));
app.use("/api/answers", answersRoutes(knex));

// Root page
app.get("/", (req, res) => {
    // res.render("index");
    res.redirect('/login');
});

// Login page
app.get("/login", (req, res) => {
    knex.select("*").from("users").where({ id: req.session.user_id }).limit(1)
        .then((result) => { // If there is cookie
            if (result.length === 0) {
                res.render("login");
            } else {
                res.redirect('/home');
            }
        })
        .catch((error) => { //Handle no cookie
            res.render("login");
        });
});

// Login
app.post("/login", (req, res) => {
    knex.select("*").from("users").where({ email: req.body.email }).limit(1).then((result) => {
        if (result.length === 0) {
            return res.send("You are trying to login with invalid email...")
        } else {
            req.session.user_id = result[0].id; // set cookie session
            res.redirect('/home');
        }
    });
});

// Home page
app.get("/home", (req, res) => {
    knex.select("*").from("users").where({ id: req.session.user_id }).limit(1)
        .then((result) => { // If there is cookie
            if (result.length === 0) {
                res.redirect("/login");
            } else {
                res.render('home');
            }
        })
        .catch((error) => { //Handle no cookie
            res.redirect("login");
        });
});

// Vote Page
app.get("/poll/:id", (req, res) => {
    res.render("poll");
});

// Post vote
app.post("/poll/:id", (req, res) => {
    res.render("/poll/:id");
});

// History page
app.get("/history", (req, res) => {
    res.render("history");
});

// Logout page
app.post("/logout", (req, res) => {
    req.session = null; // clear cookie session
    res.redirect("/login");
});

// Thank you page
app.get("/thankyou", (req, res) => {
    res.render("thankyou");
});

// The 404 route
app.get('*', function(req, res) {
    res.status(404).render("page404");
});

app.listen(PORT, () => {
    console.log("Poll Master is listening on port " + PORT);
});