export enum NODE_ENV {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || NODE_ENV.Production,
});
