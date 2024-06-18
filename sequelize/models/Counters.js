const { DataTypes } = require('@sequelize/core');
const sequelize = require('../index');

const Counters = sequelize.define('сounters', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    code: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    hash: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    domains: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    allDomain: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: false, // Отключение автоматических timestamps createdAt и updatedAt
});

module.exports = Counters;
