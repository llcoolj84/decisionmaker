"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // post to /api/polls
  router.post("/", (req, res) => {

    const randomkey = req.body.pollKey;
    const title = req.body.title;
    const description = req.body.description;
    const optionArray = req.body.optionArray;

    knex
      .insert({randomkey: randomkey, title: title, description: description, user_id: req.session.user_id})
      .into("polls")
      .returning('id')
      .then((id) => {
        // console.log(id);
        let multiRow = [];
        optionArray.forEach((eachOption) => {
          multiRow.push({name: eachOption, poll_id: id[0]})
        })
        knex
          .insert(multiRow)
          .into("options")
          .then((result) => {
            res.status(200);
        });
      })
  });

  // get from /api/polls/:id
  router.get("/:id", (req, res) => {

    knex
      .select("polls.title", "polls.description", "options.name", "options.id")
      .from("polls")
      .join("options", "polls.id", "=", "options.poll_id")
      .where({randomkey: req.params.id})
      .then((rows) => {
        let pollInfo = {
          title: rows[0].title,
          description: rows[0].description,
          options: []
        };
        rows.forEach((eachRow) => {
          pollInfo.options.push({optionName: eachRow.name, optionId: eachRow.id});
        });
        res.json(pollInfo);
    });

  });

  return router;
}


