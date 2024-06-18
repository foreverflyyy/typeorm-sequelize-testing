const { EntitySchema } = require('typeorm');

const Users = new EntitySchema({
    name: "Users",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
            default: () => `uuid_generate_v4()`,
        },
        counterIds: {
            type: "jsonb",
            nullable: false,
            default: [],
        },
        uuid: {
            type: "varchar",
            default: "",
        },
        ips: {
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

module.exports = Users;