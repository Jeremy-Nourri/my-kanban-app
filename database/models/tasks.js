'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Tasks extends Model {
    static associate(models) {
        Tasks.belongsTo(models.Lists, {
            foreignKey: 'listId',
            as: 'list',
        });
        Tasks.belongsToMany(models.Users, {
            through: 'UsersTasks',
        });
        Tasks.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'creator',
        });
        Tasks.belongsToMany(models.Teams, {
            through: 'TeamsTasks',
        });
        Tasks.belongsToMany(models.Labels, {
            through: 'TasksLabels',
        });
        Tasks.hasMany(models.Comments, {
            foreignKey: 'taskId',
            as: 'comments',
        });
        Tasks.hasMany(models.Attachments, {
            foreignKey: 'taskId',
            as: 'attachments',
        });
        Tasks.hasMany(models.Images, {
            foreignKey: 'taskId',
            as: 'images',
        });
    }
}

    Tasks.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        status: {
            type: DataTypes.ENUM('todo', 'ongoing', 'done'),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        priority: {
            type: DataTypes.ENUM('low', 'medium', 'high'),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        color: {
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
        },
    }, {
        sequelize,
    });

export default Tasks;