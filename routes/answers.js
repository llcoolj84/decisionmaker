"use strict";

const express = require('express');
const router  = express.Router();

// Mailgun
const api_key = 'key-8cd516728c0e74a126eb84c864fd1fbf'; // From mailgun dashboard
const DOMAIN = 'sandbox16ffa71b913047d78b5bac91866d244b.mailgun.org'; // From mailgun dashboard
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

const data = {
  from: 'Mailgun Sandbox <postmaster@sandbox16ffa71b913047d78b5bac91866d244b.mailgun.org>',
  to: 'Ted Yang <yangxiongtana1@gmail.com>',
  subject: 'New vote',
  text: 'A new vote has been casted!'
};

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
            mailgun.messages().send(data, function (error, body) {
              console.log(body);
            });
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
      .join("users", "polls.user_id", "=", "users.id")
      .where({"users.id": req.session.user_id})
      .then((rows) => {
        let allHistoryPolls = [];
        rows.forEach((eachRow) => {
          if (allHistoryPolls.length === 0) {
            allHistoryPolls.push({
              title: eachRow.title,
              description: eachRow.description,
              poll_answers: [{
                option_id: eachRow.id,
                option_name: eachRow.name,
                score: eachRow.score
              }],
              vote_link: "/poll/" + eachRow.randomkey
            })
          } else {
            let isSamePoll = false;
            // If same poll
            allHistoryPolls.forEach((eachUniquePoll, index) => {
              if (eachUniquePoll.vote_link === "/poll/" + eachRow.randomkey) {
                isSamePoll = true;
                eachUniquePoll.poll_answers.push({
                  option_id: eachRow.id,
                  option_name: eachRow.name,
                  score: eachRow.score
                });
              }
            });
            //If not same poll
            if (!isSamePoll) {
              allHistoryPolls.push({
                title: eachRow.title,
                description: eachRow.description,
                poll_answers: [{
                  option_id: eachRow.id,
                  option_name: eachRow.name,
                  score: eachRow.score
                }],
                vote_link: "/poll/" + eachRow.randomkey
              })
            }

          }
        });

        res.json(allHistoryPolls);
    });

  })

  return router;
}
