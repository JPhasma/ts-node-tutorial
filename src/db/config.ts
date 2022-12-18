import { Sequelize } from 'sequelize-typescript';

import { Todos } from '../models/todos';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Your_mysql_password',
  logging: false,
  database: 'todos',
  models: [Todos],
});

export default connection;
