
import { ILocationProvider } from "angular";
import { IStateProvider, IUrlRouterProvider, IState } from "angular-ui-router";
import HomeComponent from "../components/Home/HomeComponent";
import ProductComponent from "../components/Product/ProductComponent";
import HomeController from "../controllers/Home/HomeController";

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
        this.$stateProvider.state("Products", Configuration.productsState());
        this.$urlRouterProvider.otherwise("/home");
    }


    public static homeState() : IState {
        return {
            url: "/home",
            templateUrl:"../src/pages/home/home.html"
            // controller:HomeController,
            // component: "HomeComponent"
        };
    }

    public static productsState() : IState {
        return {
            url:"/products",
            templateUrl: "../src/pages/product/product.html"
            // controller:HomeController,
            // component: "ProductComponent",           
        };
    }

}

export default Configuration;