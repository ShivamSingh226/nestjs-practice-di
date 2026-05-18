const dbConfig = {
  synchronize: false,
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

const env = process.env.NODE_ENV || 'development';

switch (env) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['src/**/*.entity.ts'],
    });
    break;

  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['src/**/*.entity.ts'],
    });
    break;

  case 'production':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/**/*.entity.js'],
    });
    break;

  default:
    throw new Error('Unknown environment: ' + process.env.NODE_ENV);
}

module.exports = dbConfig;