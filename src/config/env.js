import dotenv from 'dotenv';
dotenv.config();

const env = {
  db: {
    client: 'postgresql',
    connection: {
      host: process.env.HOST || 'localhost',
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.PORT
    },
    pool: {
      min: process.env.POOL_MIN ? parseInt(process.env.POOL_MIN) : 5,
      max: process.env.POOL_MAX ? parseInt(process.env.POOL_MAX) : 10 
    }
  },
  prefix: process.env.PREFIX
}

export default env;