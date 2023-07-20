import * as pg from 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectModule: pg,
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  }
);

export function testConnection() {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      sequelize.close();
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
}

export default sequelize;