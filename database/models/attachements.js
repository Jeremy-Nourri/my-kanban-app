'use strict';

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Attachements extends Model {
    static associate(models) {
        Attachements.belongsTo(models.Tasks, {
            foreignKey: 'taskId',
            as: 'task',
        });
        Attachements.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'author',
        });
    }
}

Attachements.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    sequelize,
});

export default Attachements;