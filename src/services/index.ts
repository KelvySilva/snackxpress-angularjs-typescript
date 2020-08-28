import ProductService from "./Product/ProductService";
import IngredientService from "./Ingredient/IngredientService";
import RecipeService from "./Recipe/RecipeService";
import ClientService from "./Client/ClientService";
import MenuService from "./Menu/MenuService";
import OrderService from "./Order/OrderService";

const services = [
    ProductService,
    IngredientService,
    RecipeService,
    ClientService,
    MenuService,
    OrderService
];

export default services;