"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // post to /api/answers
  router.post("/", (req, res) => {

    const voterFirstName = req.body.first_name;
    const votes = req.body.votes;

    knex
      .insert({first_name: voterFirstName})
      .into("voters")
      .returning("id")
      .limit(1)
      .then((id) => {
        // console.log(id);
        let multiRow = [];
        votes.forEach((eachVote) => {
          multiRow.push({voter_id: id[0], score: eachVote.score, option_id: eachVote.optionId})
        })
      knex
        .insert(multiRow)
        .into("answers")
        .then((result) => {
          res.status(200).json(result); // has to send back something otherwise the ajax .done won't be triggered.
        });
      });
  })

  // get from /api/answers
  router.get("/", (req, res) => {

    knex
      .select("polls.randomkey", "polls.title", "polls.description", "options.name", "options.id", "answers.score")
      .from("options")
      .join("polls", "polls.id", "=", "options.poll_id")
      .join("answers", "answers.option_id", "=", "options.id")
      .then((rows) => {
        let allHistoryPolls = [];
        rows.forEach((eachRow) => {
          if (allHistoryPolls.length === 0) {
            allHistoryPolls.push({
              title: eachRow.title,
              description: eachRow.description,
              poll_options: [],
              vote_link: "/poll/" + eachRow.randomkey
            })
          }
          //More to work on...

        });

        res.json(allHistoryPolls);
    });

  })

  return router;
}
