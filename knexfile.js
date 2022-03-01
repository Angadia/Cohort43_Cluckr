// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "Cluckr",
      user: "jignesh",
      password: "supersecret",
    },
    migrations: {
      tableName: "migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },
};
