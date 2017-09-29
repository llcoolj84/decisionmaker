"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // post to /api/answers
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
