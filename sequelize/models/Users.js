const { DataTypes } = require('@sequelize/core');
const sequelize = require('../index');

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    counterIds: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    uuid: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    ips: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    lastSeen: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
    },
}, {
    timestamps: false, // Отключение автоматических timestamps createdAt и updatedAt
});

module.exports = Users;