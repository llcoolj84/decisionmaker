
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('answers', function (table) {
      table.dropColumn('content');
    }),
    knex.schema.table('answers', function (table) {
      table.integer('score');
    }),
    knex.schema.table('answers', function (table) {
      table.dropColumn('poll_id');
    }),
    knex.schema.table('answers', function (table) {
      table.integer('option_id').unsigned();
      table.foreign('option_id').references("id").inTable('options');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('answers', function (table) {
      table.dropColumn('score');
    }),
    knex.schema.table('answers', function (table) {
      table.json('content');
    }),
    knex.schema.table('answers', function (table) {
      table.dropColumn('option_id');
    }),
    knex.schema.table('answers', function (table) {
      table.integer('poll_id').unsigned();
      table.foreign('poll_id').references("id").inTable('polls');
    }),
  ])
};
