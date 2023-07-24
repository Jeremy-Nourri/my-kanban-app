'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Lists extends Model {
    static associate(models) {
        Lists.belongsTo(models.Projects, {
            foreignKey: 'projectId',
            as: 'project',
        });
        Lists.hasMany(models.Tasks, {
            foreignKey: 'listId',
            as: 'tasks',
        });
        Lists.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'creator',
        });
    }
}

Lists.init({
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
    position: {
        type: DataTypes.INTEGER,
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

export default Lists;
