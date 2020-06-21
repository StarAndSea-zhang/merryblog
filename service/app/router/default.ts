import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller } = app;
    router.get('/default/lastest', controller.default.home.lastest);
    router.get('/list', controller.default.home.list);
};
