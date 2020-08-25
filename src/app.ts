import { module, ILocationProvider, IModule, fromJson, IAngularStatic } from 'angular';

import uiroute, { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

import Configuration from './config/Configuration';

import controllers from './controllers/index';

import components from './components/index';

import services from './services/index';

import filters from './filters/index';


class App {
   
   static $inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];

   private module: IModule;

   constructor() {
      this.module = module("snackxpress", [uiroute]);
      this.registerConfigRoutes();
      this.registerControllers();
      this.registerComponents();
      this.registerServices();
      this.registerFilters();
   }

   private registerConfigRoutes() : void {
      this.module.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
      ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
         return new Configuration($stateProvider, $urlRouterProvider, $locationProvider);
      }]);
   }

   private registerControllers() : void {
      controllers.forEach(controller => this.module.controller(controller.name , controller));
   }
   
   private registerComponents() : void {
      components.forEach(component => this.module.component(component.NAME, new component));
   }

   private registerServices(): void {
      services.forEach(service => this.module.service(service.name, service));
   }

   private registerFilters() : void {
      filters.forEach(filter => this.module.filter(filter.name, () => filter));
   }
}
 
export default new App();