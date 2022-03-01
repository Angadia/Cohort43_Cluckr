const faker = require("faker");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("clucks").del();
  const clucks = Array.from({ length: 10 }).map(() => {
    return {
      username: faker.internet.userName(),
      image_url: faker.image.imageUrl(),
      content: faker.lorem.paragraph(),
      created_at: faker.date.past(),
      updated_at: faker.date.recent(),
    };
  });
  await knex("clucks").insert(clucks);
};
