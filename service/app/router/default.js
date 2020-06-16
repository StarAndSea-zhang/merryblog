'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/lastest', controller.default.home.lastest);
  router.get('/list', controller.default.home.list);
};
