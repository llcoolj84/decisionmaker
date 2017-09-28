"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // get from /api/options
  router.post("/", (req, res) => {
    console.log(req.body);

    knex
      .insert({name: "Beef", poll_id: "abcdef"})
      .into("options")
      .then((result) => {
        console.log(result);
    });

  });

  // post to /api/options
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
