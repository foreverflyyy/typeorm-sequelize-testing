const moment = require('moment');
const { DataTypes } = require('@sequelize/core');
const sequelize = require('../index');

const Goals = sequelize.define('goals', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
    },
    createdAtX: {
        type: DataTypes.BIGINT,
        defaultValue: () => moment().format('x'),
    },
    createdAtString: {
        type: DataTypes.STRING,
        defaultValue: () => moment().utc().format('DD-MM-YYYY'),
    },
    createdAtStringFull: {
        type: DataTypes.STRING,
        defaultValue: () => moment().utc().format('DD-MM-YYYY HH:mm'),
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    counterId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    sessionId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    eventType: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    eventData: {
        type: DataTypes.JSONB,
        defaultValue: {},
    },
}, {
    timestamps: false, // Отключение автоматических timestamps createdAt и updatedAt
});

module.exports = Goals;