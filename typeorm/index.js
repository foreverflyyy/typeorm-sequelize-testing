const { DataSource } = require("typeorm");
const entities = require("./entities");
const testing = require("./testing");

let connection;
const repositories = {};

(async () => {
    connection = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        entities: Object.values(entities),
        synchronize: true,
        logging: false,
    })
    await connection.initialize();

    for (const [nameEntity, entity] of Object.entries(entities)) {
        repositories[`${nameEntity}Repository`] = connection.getRepository(entity);
    }

    // await testing(repositories);
    // await repositories.goalsRepository.delete({})
    // await repositories.goalsRepository.save({})
    // await repositories.goalsRepository.insert(arr)
})();

// save
// 10_000 records - 11.7 sec
// 20_000 records - 22.5 sec
// 1 records - 0.026 sec

// insert
// 1 records - 0.020 sec
// 10_000 records - 9.6 sec (по одиночке)
// 10_000 records - 0.4 sec (множественная запись)

module.exports = repositories;