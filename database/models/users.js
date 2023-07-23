'use strict';
import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../index.js';

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

Users.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

Users.beforeUpdate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

export default Users;