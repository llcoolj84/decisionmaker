"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // get from /api/polls
  router.get("/", (req, res) => {
    console.log(req.body);

    // knex
    //   .select("*")
    //   .from("users")
    //   .then((results) => {
    //     res.json(results);
    // });

  });

  // post to /api/polls
  router.post("/", (req, res) => {
    console.log(req.body);

    // knex
    //   .select("*")
    //   .from("users")
    //   .then((results) => {
    //     res.json(results);
    // });

  });

  return router;
}
