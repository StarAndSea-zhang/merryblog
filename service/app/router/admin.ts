import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller} = app;
    router.post('/admin/login', controller.admin.auth.checkLogin);
    router.get('/admin/type/list',controller.admin.type.getCatagories);
    router.get('/admin/article/list',controller.admin.article.getArticles);
};
