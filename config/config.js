module.exports = {
  development: {
    username: "aryaman",
    password: "root",
    database: "book_my_show",
    host: "127.0.0.1",
    dialect: "mysql",
    migrationStorage: "json",
    seederStorage: "json",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
