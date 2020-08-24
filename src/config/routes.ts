configRoutes.$inject = ["$routeProvider"];
function configRoutes($routeProvider: ng.route.IRouteProvider)  {
    console.log("Router...");
    $routeProvider
    .when("/", { 
        redirectTo: "/home"
    })
    .when("/home", { 
        // controller: HomeController, 
        templateUrl: "../src/pages/home/home.html"
        // controllerAs: "playList" 
    })
    .when("/products", {
        // controller: ProductControler,
        templateUrl: "../src/pages/product/product.html"
    });
    $routeProvider.otherwise({ redirectTo: "/home" });
}

export default configRoutes;




