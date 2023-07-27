'use strict';

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Images extends Model {
    static associate(models) {
        Images.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'author',
        });
        Images.belongsTo(models.Tasks, {
            foreignKey: 'imageId',
            as: 'task',
        });
        Images.belongsTo(models.Projects, {
            foreignKey: 'imageId',
            as: 'project',
        });
        Images.belongsTo(models.Teams, {
            foreignKey: 'imageId',
            as: 'team',
        });
    }
}

Images.init({
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
    url: {
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

export default Images;