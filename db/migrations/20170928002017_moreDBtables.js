exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
    }),
    knex.schema.createTable('polls', function (table) {
      table.increments('id').primary();
      table.string('randomkey');
      table.string('title');
      table.string('description');
      table.string('result');
      table.string('status');
      table.date('create_date');
      table.date('end_date');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references("id").inTable('users');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('polls')
  ]);
  
};
