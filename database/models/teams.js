'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Teams extends Model {
    static associate(models) {
        Teams.belongsToMany(models.Users, {
            through: 'UsersTeams',
        });
        Teams.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'creator',
        });
        Teams.belongsToMany(models.Projects, {
            through: 'TeamsProjects',
        });
        Teams.belongsToMany(models.Tasks, {
            through: 'TeamsTasks',
        });
        Teams.belongsTo(models.Images, {
            foreignKey: 'imageId',
            as: 'image',
        });
        
    }
}

Teams.init({
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

export default Teams;