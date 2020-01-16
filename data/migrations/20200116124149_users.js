
exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.increments();
        table.string('avatar', 255).notNullable();
        table.string('firstName', 255).notNullable();
        table.string('lastName', 255).notNullable();
        table.string('username', 255).unique().notNullable();
        table.string('email', 255).unique().notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true);
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
