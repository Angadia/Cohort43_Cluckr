/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("clucks", (clucks) => {
    clucks.increments("id");
    clucks.string("username");
    clucks.string("image_url");
    clucks.text("content");
    clucks.timestamp("created_at").defaultTo(knex.fn.now());
    clucks.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("clucks");
};
