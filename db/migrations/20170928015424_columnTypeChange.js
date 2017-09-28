exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.table('polls', function (table) {
        table.text('description');
      })
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.table('polls', function (table) {
        table.dropColumn('description');
      })
    ])
  };