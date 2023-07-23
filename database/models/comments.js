'use strict';

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Comments extends Model {
    static associate(models) {
        Comments.belongsTo(models.Tasks, {
            foreignKey: 'taskId',
            as: 'task',
        });
        Comments.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'author',
        });
    }
}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
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

export default Comments;