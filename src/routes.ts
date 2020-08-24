import { IStateProvider, IUrlRouterProvider } from "angular-ui-router";
import HomeComponent from "./components/Home/HomeComponent";
import ProductComponent from "./components/Product/ProductComponent";
import HomeController from "./controllers/Home/HomeController";
import ProductControler from "./controllers/Product/ProductController";



// configRoutes.$inject = ["$routeProvider"];
// function configRoutes($routeProvider: ng.route.IRouteProvider)  {
//     console.log("Router...");
//     $routeProvider
//     .when("/", { 
//         redirectTo: "/home"
//     })
//     .when("/home", { 
//         // controller: HomeController, 
//         templateUrl: "../src/pages/home/home.html"
//         // controllerAs: "playList" 
//     })
//     .when("/products", {
//         // controller: ProductControler,
//         templateUrl: "../src/pages/product/product.html"
//     });
//     $routeProvider.otherwise({ redirectTo: "/home" });
// }

configRoutes.$inject = ["$stateProvider","$urlRouterProvider"];
function configRoutes($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider)  {
    console.log("Router");
    $stateProvider
    .state("/", { 
        url:"/",
        name: HomeComponent.NAME,
        controller: HomeController
        // templateUrl: "../src/pages/home/home.html"
        // controllerAs: "playList" 
    })
    .state("Home",{ 

        url:"/home",
        name: HomeComponent.NAME,
        controller: HomeController
        // templateUrl: "../src/pages/home/home.html"
        // controllerAs: "playList" 
    })
    .state("Products",{
        url:"/products",
        name: ProductComponent.NAME,
        controller: ProductControler
        // templateUrl: "../src/pages/product/product.html"
    });
    $urlRouterProvider.otherwise("/home");
}


export default configRoutes;