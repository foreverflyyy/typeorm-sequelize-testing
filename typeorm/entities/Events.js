const { EntitySchema } = require('typeorm');
const moment = require('moment');

const Events = new EntitySchema({
    name: "Events",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
            default: () => `uuid_generate_v4()`,
        },
        createdAt: {
            type: "timestamp",
            name: 'created_at',
            createDate: true,
        },
        createdAtX: {
            type: "bigint",
            default: () => moment().format('x'),
        },
        createdAtString: {
            type: "varchar",
            default: () => `'${moment().utc().format('DD-MM-YYYY')}'`,
        },
        createdAtStringFull: {
            type: "varchar",
            default: () => `'${moment().utc().format('DD-MM-YYYY HH:mm')}'`,
        },
        userId: {
            type: "varchar",
            nullable: true,
            default: null,
        },
        counterId: {
            type: "varchar",
            nullable: true,
            default: null,
        },
        sessionId: {
            type: "varchar",
            nullable: true,
            default: null,
        },
        eventType: {
            type: "varchar",
            default: "",
        },
    },
});

module.exports = Events;