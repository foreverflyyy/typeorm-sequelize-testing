const { DataTypes } = require('@sequelize/core');
const sequelize = require('../index');

const Sessions = sequelize.define('sessions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    counterId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    userUuid: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    hash: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    ip: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    events: {
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

module.exports = Sessions;