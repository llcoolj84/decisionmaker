"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // post to /api/polls
  router.post("/", (req, res) => {

    const randomkey = req.body.pollKey;
    const title = req.body.title;
    const description = req.body.description;

    knex
      .insert({randomkey: randomkey, title: title, description: description, user_id: req.session.user_id})
      .into("polls")
      .returning('id')
      .then((id) => {
        console.log(id);
        let multiRow = [];
        req.body.optionArray.forEach((eachOption) => {
          multiRow.push({name: eachOption, poll_id: id[0]})
        })
        knex
          .insert(multiRow)
          .into("options")
          .then((result) => {
            console.log(result);
        });
      })
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
