import { IStateProvider, IUrlRouterProvider } from "angular-ui-router";
import { ILocationProvider } from "angular";

configRoutes.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
function configRoutes($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider,$locationProvider: ILocationProvider)  {
    console.log("Router");
    $stateProvider
    .state("/", { 
        url:"/",
        // name: HomeComponent.NAME,
        templateUrl: "../src/pages/home/home.html"
        // controllerAs: "playList" 
    })
    .state("Home",{ 

        url:"/home",
        // name: HomeComponent.NAME,
        templateUrl: "../src/pages/home/home.html"
        // controllerAs: "playList" 
    })
    .state("Products",{
        url:"/products",
        // name: ProductComponent.NAME,        
        templateUrl: "../src/pages/product/product.html"
    });
    $urlRouterProvider.otherwise("/home");
}


export default configRoutes;