const { EntitySchema } = require('typeorm');

const Sessions = new EntitySchema({
    name: "Sessions",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
            default: () => `uuid_generate_v4()`,
        },
        counterId: {
            type: "varchar",
            nullable: true,
            default: null,
        },
        userId: {
            type: "varchar",
            nullable: true,
            default: null,
        },
        userUuid: {
            type: "varchar",
            default: "",
        },
        hash: {
            type: "varchar",
            default: "",
        },
        ip: {
            type: "varchar",
            default: "",
        },
        events: {
            type: "jsonb",
            nullable: false,
            default: [],
        },
        lastSeen: {
            type: "date",
            nullable: true,
            default: null,
        },
        created: {
            type: "timestamp",
            name: 'created_at',
            createDate: true,
        },
    },
});

module.exports = Sessions;