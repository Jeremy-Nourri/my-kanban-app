'use strcit';

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

class Labels extends Model {
    static associate(models) {
        Labels.belongsToMany(models.Tasks, {
            through: 'TasksLabels',
        });
        Labels.belongsTo(models.Users , {
            foreignKey: 'userId',
            as: 'creator',
        });
    }
}

Labels.init({
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
    color: {
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

export default Labels;