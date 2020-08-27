
import { ILocationProvider, IController, IScope } from "angular";
import { IStateProvider, IUrlRouterProvider, IState, IStateParamsService } from "angular-ui-router";
import HomeController from "../controllers/Home/HomeController";
import ProductControler from "../controllers/Product/ProductController";
import IngredientControler from "../controllers/Ingredient/IngredientController";
import ClientControler from "../controllers/Client/ClientController";
import RecipeControler from "../controllers/Recipe/RecipeController";
import MenuControler from "../controllers/Menu/MenuController";
import MenuService from "../services/Menu/MenuService";
import { Menu } from "../models/Menu";
import MenuDetailComponent from "../components/Menu/MenuDetailComponent";
import RecipeDetailComponent from "../components/Recipe/RecipeDetailComponent";
import IngredientEditionComponent from "../components/Ingredient/IngredientEditionComponent";
import RecipeEditionComponent from "../components/Recipe/RecipeEditionsComponent";

class Configuration {
    
    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider) {
            this.init();
            console.log("Router");
        }
        
    
    public init() : void {
        this.$stateProvider.state(Configuration.homeState());
        this.$stateProvider.state(Configuration.clientsState());
        this.$stateProvider.state(Configuration.productsState());
        this.$stateProvider.state(Configuration.ingredientsState())
        this.$stateProvider.state(Configuration.ingredientEditionState())
        this.$stateProvider.state(Configuration.recipesState())
        this.$stateProvider.state(Configuration.recipeState())
        this.$stateProvider.state(Configuration.recipeEditionsState())
        this.$stateProvider.state(Configuration.menusState())
        this.$stateProvider.state(Configuration.menuState())
        this.$urlRouterProvider.otherwise("/home");        
    }


    public static homeState() : IState {
        return {
            name:"Home",
            url: "/home",
            templateUrl:"../src/pages/home/home.html",
            controller:HomeController,
            controllerAs: 'view'
        };
    }

    public static productsState() : IState {
        return {
            name:"Products",
            url:"/products",
            templateUrl: "../src/pages/product/product.html",
            controller: ProductControler,
            controllerAs: 'view'       
        };
    }
    public static ingredientsState() : IState {
        return {
            name:"Ingredients",
            url:"/ingredients",
            templateUrl: "../src/pages/ingredient/ingredients.html",
            controller: IngredientControler,
            controllerAs: 'view'      
        };
    }

    public static ingredientEditionState() : IState {
        return {
            name:"Ingredient",
            url:"/ingredient",
            component: IngredientEditionComponent.NAME,
            params: {
                ingredient_id: null
            }
        };
    }

    public static recipesState() : IState {
        return {
            name:"Recipes",
            url:"/recipes",
            templateUrl: "../src/pages/recipe/recipes.html",
            controller: RecipeControler,
            controllerAs: 'view'      
        };
    }

    public static recipeState() : IState {
        return {
            name:"Recipe",
            url:"/recipe/:recipe_id",
            params: {
                recipe_id:null
            },
            component: RecipeDetailComponent.NAME
        };
    }

    public static recipeEditionsState() : IState {
        return {
            name:"RecipeEdition",
            url:"/recipe/edit/:recipe_id",
            params: {
                recipe_id:null
            },
            component: RecipeEditionComponent.NAME
        };
    }

    public static clientsState() : IState {
        return {
            name:"Clients",
            url:"/clients",
            templateUrl: "../src/pages/client/clients.html",
            controller:ClientControler,
            controllerAs: 'view'        
        };
    }

    public static menusState() : IState {
        return {
            name:"Menus",
            url:"/menus",
            templateUrl: "../src/pages/menu/menus.html",
            controller:MenuControler,
            controllerAs: 'view'        
        };
    }

    public static menuState() : IState {
        return {
            name:"Menu",
            url:"/menu/:menu_id",
            params: {
                menu_id:null
            },
            component: MenuDetailComponent.NAME
            
        }
    }

}

export default Configuration;