import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller } = app;
    router.get('/admin/index', controller.admin.home.index);
    router.post('/admin/login', controller.admin.home.checkLogin);
};
