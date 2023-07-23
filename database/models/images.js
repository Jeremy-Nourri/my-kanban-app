'use strict';

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Images extends Model {
    static associate(models) {
        Images.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'user',
        });
        Images.hasMany(models.Tasks, {
            foreignKey: 'imageId',
            as: 'tasks',
        });
        Images.hasMany(models.Projects, {
            foreignKey: 'imageId',
            as: 'projects',
        });
        Images.hasMany(models.Teams, {
            foreignKey: 'imageId',
            as: 'teams',
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
    link: {
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