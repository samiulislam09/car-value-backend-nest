import { DataSourceOptions } from 'typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/reports.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'car',
  password: 'car',
  database: 'car',
  entities: [User, Report],
  synchronize: true,
};
export default config;
