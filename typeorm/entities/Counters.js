const { EntitySchema } = require('typeorm');

const Counters = new EntitySchema({
    name: "Counters",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
            default: () => `uuid_generate_v4()`,
        },
        title: {
            type: "varchar",
            default: "",
        },
        description: {
            type: "varchar",
            default: "",
        },
        code: {
            type: "varchar",
            default: "",
        },
        hash: {
            type: "varchar",
            default: "",
        },
        counter: {
            type: "int",
            default: 0,
        },
        domains: {
            type: "jsonb",
            nullable: false,
            default: [],
        },
        allDomain: {
            type: "boolean",
            default: false,
        },
    },
});

module.exports = Counters;
