
exports.up = knex => knex.schema.createTable("movies", table => {
  table.increments("id");
  table.text("description");
  table.text("title");
  table.integer("rating");
  table.integer("user_id").references("id").inTable("users");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
}) 


exports.down = knex => knex.schema.createTable("movie_tags") 