'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import hashPassword from '../services/userServices.js';

class Users extends Model {
    static associate(models) {
        Users.belongsToMany(models.Teams, {
            through: 'UsersTeams',
        });
        Users.hasMany(models.Projects, {
            foreignKey: 'userId',
            as: 'createdProjects',
        });
        Users.hasMany(models.Comments, {
            foreignKey: 'userId',
            as: 'comments',
        });
        Users.hasMany(models.Tasks, {
            foreignKey: 'userId',
            as: 'createdTasks',
        });
        Users.hasMany(models.Attachments, {
            foreignKey: 'userId',
            as: 'attachments',
        });
        Users.hasMany(models.Images, {
            foreignKey: 'userId',
            as: 'images',
        });
        Users.hasMany(models.Labels, {
            foreignKey: 'userId',
            as: 'labels',
        });
        Users.hasMany(models.Lists, {
            foreignKey: 'userId',
            as: 'createdLists',
        });      
        Users.belongsToMany(models.Tasks, {
            through: 'UsersTasks',
        });
    }
};

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  sequelize,
});

export default Users;