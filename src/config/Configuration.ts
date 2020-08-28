
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
import MenuEditionComponent from "../components/Menu/MenuEditionComponent";
import MenuItemEditionComponent from "../components/Menu/MenuItemEditionComponent";
import ClientEditionComponent from "../components/Client/ClientEditionComponent";
import ProductEdtitionComponent from "../components/Product/ProductEditionComponent";
import OrderController from "../controllers/Order/OrderController";
import OrderDetailComponent from "../components/Order/OrderDetailComponent";

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
        this.$stateProvider.state(Configuration.clientEditionState());
        this.$stateProvider.state(Configuration.productsState());
        this.$stateProvider.state(Configuration.productEditionState());
        this.$stateProvider.state(Configuration.ingredientsState())
        this.$stateProvider.state(Configuration.ingredientEditionState())
        this.$stateProvider.state(Configuration.recipesState())
        this.$stateProvider.state(Configuration.recipeState())
        this.$stateProvider.state(Configuration.recipeEditionsState())
        this.$stateProvider.state(Configuration.menusState())
        this.$stateProvider.state(Configuration.menuEditionState())
        this.$stateProvider.state(Configuration.menuItemEditionState())
        this.$stateProvider.state(Configuration.menuState())
        this.$stateProvider.state(Configuration.ordersState())
        this.$stateProvider.state(Configuration.orderState())
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
            templateUrl: "../src/pages/product/products.html",
            controller: ProductControler,
            controllerAs: 'view'       
        };
    }
    public static productEditionState() : IState {
        return {
            name:"ProductEdition",
            url:"/product/edit/:product_id",
            params: {
                product_id: null
            },
            component: ProductEdtitionComponent.NAME
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
            url:"/recipe",
            params: {
                recipe_id:null
            },
            component: RecipeDetailComponent.NAME
        };
    }

    public static recipeEditionsState() : IState {
        return {
            name:"RecipeEdition",
            url:"/recipe/edit",
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

    public static clientEditionState() : IState {
        return {
            name:"ClientEdition",
            url:"/client/edit",
            params: {
                client_id: null
            },
            component: ClientEditionComponent.NAME      
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
            url:"/menu/",
            params: {
                menu_id: null
            },
            component: MenuDetailComponent.NAME
            
        }
    }
    public static menuEditionState() : IState {
        return {
            name:"MenuEdition",
            url:"/menu/edit", 
            params: {
                menu_id:null
            },
            component: MenuEditionComponent.NAME
            
        }
    }
    public static menuItemEditionState() : IState {
        return {
            name:"MenuItemEdition",
            url:"/menu/edit/item", 
            params: {
                menu_id:'0',
                menu_item_id: null
            },
            component: MenuItemEditionComponent.NAME
            
        }
    }

    public static ordersState() : IState {
        return {
            name:"Orders",
            url:"/orders",
            templateUrl: "../src/pages/order/orders.html",
            controller:OrderController,
            controllerAs: 'view'        
        };
    }

    public static orderState() : IState {
        return {
            name:"Order",
            url:"/order",
            params: {
                order_id: null
            },
            component: OrderDetailComponent.NAME
        };
    }

}

export default Configuration;