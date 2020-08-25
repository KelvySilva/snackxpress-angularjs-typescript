
import { ILocationProvider } from "angular";
import { IStateProvider, IUrlRouterProvider, IState } from "angular-ui-router";
import HomeController from "../controllers/Home/HomeController";
import ProductControler from "../controllers/Product/ProductController";

class Configuration {
    
    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider) {
            this.init();
            console.log("Router");
        }
    
    public init() : void {
        this.$stateProvider.state("Home", Configuration.homeState());
        this.$stateProvider.state("Clients", Configuration.clientsState());
        this.$stateProvider.state("Products", Configuration.productsState());
        this.$urlRouterProvider.otherwise("/home");
    }


    public static homeState() : IState {
        return {
            url: "/home",
            templateUrl:"../src/pages/home/home.html",
            controller:HomeController,
            controllerAs: 'view'
            // component: "HomeComponent"
        };
    }

    public static productsState() : IState {
        return {
            url:"/products",
            templateUrl: "../src/pages/product/product.html",
            controller: ProductControler,
            controllerAs: 'view'
            // component: "ProductComponent",           
        };
    }
    public static clientsState() : IState {
        return {
            url:"/clients",
            templateUrl: "../src/pages/clients/clients.html",
            controllerAs: 'view'
            // component: "ProductComponent",           
        };
    }

}

export default Configuration;