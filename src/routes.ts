import HomeController from "./controllers/Home/HomeController";
import ProductControler from "./controllers/Product/ProductController";
// import { IStateProvider, IUrlRouterProvider } from "angular-ui-router";



configRoutes.$inject = ["$routeProvider"];
function configRoutes($routeProvider: ng.route.IRouteProvider)  {
    console.log("Router");
    $routeProvider.when("/", { 
            // controller: HomeController, 
            templateUrl: "../src/pages/home/home.html"
            // controllerAs: "playList" 
        }).when("/products", {
            // controller: ProductControler,
            templateUrl: "../src/pages/product/product.html"
        });
        $routeProvider.otherwise({ redirectTo: "/home" });
}

// configRoutes.$inject = ["$routeProvider"];
// function configRoutes($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider)  {
//     console.log("Router");
//     $stateProvider.state("/", { 
//             // controller: HomeController, 
//             templateUrl: "../src/pages/home/home.html"
//             // controllerAs: "playList" 
//         }).state("/products", {
//             // controller: ProductControler,
//             templateUrl: "../src/pages/product/product.html"
//         });
//         $urlRouterProvider.otherwise("/home");
// }


export default configRoutes;