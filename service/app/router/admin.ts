import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller} = app;

    router.post('/admin/login', controller.admin.home.checkLogin);
    router.get('/admin/index',controller.admin.home.index);
};
