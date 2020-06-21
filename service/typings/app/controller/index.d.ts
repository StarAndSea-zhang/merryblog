// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminHome from '../../../app/controller/admin/home';
import ExportDefaultHome from '../../../app/controller/default/home';

declare module 'egg' {
  interface IController {
    admin: {
      home: ExportAdminHome;
    }
    default: {
      home: ExportDefaultHome;
    }
  }
}
