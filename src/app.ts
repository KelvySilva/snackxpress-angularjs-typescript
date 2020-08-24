import { module, IController, fromJson } from 'angular';
// import ngRoute from 'angular-route';

import uirouter from 'angular-ui-router';
// import IController  from 'angular';

import configureRoutes from './routes';
// import ProductControler from './controllers/Product/ProductController';
// import HomeController from './controllers/Home/HomeController';

// const productController: ProductControler = new ProductControler();
// const homeController: HomeController = new HomeController();

const app = module('snackxpress',[uirouter]);
app.config(configureRoutes);

 
export default app;