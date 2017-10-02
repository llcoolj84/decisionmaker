exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: 'A', last_name: 'A', email: 'aaa@aaa.com'}),
        knex('users').insert({first_name: 'B', last_name: 'B', email: 'bbb@bbb.com'}),
        knex('users').insert({first_name: 'C', last_name: 'C', email: 'ccc@ccc.com'}),
        knex('users').insert({first_name: 'D', last_name: 'D', email: 'ddd@ddd.com'}),
        knex('users').insert({first_name: 'E', last_name: 'E', email: 'eee@eee.com'}),
        knex('users').insert({first_name: 'F', last_name: 'F', email: 'fff@fff.com'})
      ]);
    });
};
