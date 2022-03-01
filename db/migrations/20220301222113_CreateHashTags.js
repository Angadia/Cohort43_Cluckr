/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("hash_tags", (hash_tags) => {
    hash_tags.increments("id");
    hash_tags.string("hash_tag");
    hash_tags.integer("count").unsigned().notNullable();
    hash_tags.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("hash_tags");
};
