import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {

  /**
   * @ auther zoezhang
   * 传入EggAppConfig可通过PowerPartial类将EggAppConfig全部遍历，合并，提供智能提示
   * export type PowerPartial<T> = {
   * [U in keyof T]?: T[U] extends object
   * ? PowerPartial<T[U]>
   * : T[U]
   * };
   */
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592721814037_3534';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'blog',
    host: '111.231.9.226',
    port: 3306,
    username: 'root',
    password: '19950214',
  };

  config.jwt = {
    secret: "19950214"//自定义 token 的加密条件字符串
  };

  //解决跨域
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*' ]
  };
  config.cors = {
    credentials: true,   // 开启认证
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
