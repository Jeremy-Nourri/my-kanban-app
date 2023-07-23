'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Projects extends Model {
    static associate(models) {
        Projects.belongsToMany(models.Teams, {
            through: 'TeamsProjects',
        });
        Projects.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'creator',
        });

        Projects.hasMany(models.Lists, {
            foreignKey: 'projectId',
            as: 'lists',
        });
        Projects.belongsTo(models.Images, {
            foreignKey: 'imageId',
            as: 'image',
        });
    }
}

Projects.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
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

export default Projects;