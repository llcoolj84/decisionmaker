"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // post to /api/options
  router.post("/", (req, res) => {
    console.log(req.body);

    knex
      .insert({randomkey: "abcdef", title: "titleA", description: "this is the description", user_id: req.session.user_id})
      .into("polls")
      .returning('id')
      .then((id) => {
        console.log(id);
        knex
          .insert({name: "Beef", poll_id: id[0]})
          .into("options")
          .then((result) => {
            console.log(result);
        });
      })
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
