exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: 'A', last_name: 'A', email: 'aaa@aaa.com'}),
        knex('users').insert({first_name: 'B', last_name: 'A', email: 'bbb@bbb.com'}),
        knex('users').insert({first_name: 'C', last_name: 'A', email: 'ccc@ccc.com'})
      ]);
    });
};
