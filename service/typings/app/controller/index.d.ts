// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminAuth from '../../../app/controller/admin/auth';
import ExportAdminType from '../../../app/controller/admin/type';
import ExportDefaultHome from '../../../app/controller/default/home';

declare module 'egg' {
  interface IController {
    admin: {
      article: ExportAdminArticle;
      auth: ExportAdminAuth;
      type: ExportAdminType;
    }
    default: {
      home: ExportDefaultHome;
    }
  }
}
