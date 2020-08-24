import { module, ILocationProvider } from 'angular';
// import ngRoute from 'angular-route';

import uiroute, { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
// import IController  from 'angular';

import Configuration from './config/configuration';
// import ProductControler from './controllers/Product/ProductController';
// import HomeController from './controllers/Home/HomeController';

// const productController: ProductControler = new ProductControler();
// const homeController: HomeController = new HomeController();

const app = module('snackxpress',[uiroute]);
app.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
   return new Configuration($stateProvider, $urlRouterProvider, $locationProvider);
}]);

 
export default app;