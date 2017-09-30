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

  return router;
}
