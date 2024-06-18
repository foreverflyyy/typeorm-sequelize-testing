const {Sequelize} = require('@sequelize/core');
const {PostgresDialect} = require('@sequelize/postgres');
const testing = require('./testing');

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: "postgres",
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const models = require("./models");
    await sequelize.sync();

    await testing(models);
    // await models.goals.truncate()
    // await models.goals.create({);
    // await models.goals.bulkCreate(arr);
})();

// create
// 10_000 records - 16.4 sec
// 20_000 records - 32 sec
// 1 records - 0.025 sec

// bulkCreate
// 10_000 records - 0.825 sec
// 10_000 records - 1.470 sec

module.exports = sequelize;