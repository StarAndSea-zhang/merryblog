import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller} = app;
    router.post('/admin/login', controller.admin.auth.checkLogin);
    router.get('/admin/type/list',controller.admin.type.getCatagories);
    router.get('/admin/article',controller.admin.article.getArticles);
    router.put('/admin/article',controller.admin.article.createArticle);
    router.post('/admin/article',controller.admin.article.updateArticle);
};
