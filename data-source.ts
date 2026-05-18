import 'reflect-metadata';
import { DataSource } from 'typeorm';

const isProd = process.env.NODE_ENV === 'production';

export default new DataSource({
  type: 'sqlite',

  database:
    process.env.NODE_ENV === 'test'
      ? 'test.sqlite'
      : 'db.sqlite',

  synchronize: false,

  entities: [
    isProd
      ? 'dist/src/**/*.entity.js'
      : 'src/**/*.entity.ts',
  ],

  migrations: [
    isProd
      ? 'dist/migrations/*.js'
      : 'migrations/*.ts',
  ],
});