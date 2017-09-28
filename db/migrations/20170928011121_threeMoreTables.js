exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('options', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('poll_id').unsigned();
        table.foreign('poll_id').references("id").inTable('polls');
      }),
      knex.schema.createTable('voters', function (table) {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
      }),
      knex.schema.createTable('answers', function (table) {
        table.increments('id').primary();
        table.json('content');
        table.integer('voter_id').unsigned();
        table.foreign('voter_id').references("id").inTable('voters');
        table.integer('poll_id').unsigned();
        table.foreign('poll_id').references("id").inTable('polls');
      })
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('options'),
      knex.schema.dropTable('voters'),
      knex.schema.dropTable('answers')
    ]);
    
  };