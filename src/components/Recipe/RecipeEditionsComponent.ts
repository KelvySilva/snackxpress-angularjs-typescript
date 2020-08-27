import { IComponentOptions, IController, copy, IScope} from "angular";
import { IStateParamsService } from "angular-ui-router";
import { IStateService } from "angular-ui-router";
import RecipeService from "../../services/Recipe/RecipeService";
import IngredientService from "../../services/Ingredients/IngredientService";
import { Ingredient } from "../../models/Ingredient";
import { Composite } from "../../models/Composite";
import Toastr from 'toastr';
import { Recipe } from "../../models/Recipe";
import { Product } from "../../models/Product";


class RecipeEditionComponent implements IComponentOptions {

    static NAME: string = "recipeEditionComponent";

    template: any;
    templateUrl: any;
    transclude: any;
    controller: any;
    controllerAs: any;

    constructor() {

        this.controller = class RecipeEditionComponentController implements IController {

            public ingredientsToSelect: Ingredient[] = [];
            public composities: Composite[] = [];
            public recipe: Recipe = new Recipe();
            public productFinal: Product = new Product();
            public title: string = '';

            static $inject:string[] = ['$scope','$stateParams','$state','RecipeService','IngredientService'];

            constructor(
                protected $scope: IScope,
                protected $stateParams: IStateParamsService, 
                protected $state: IStateService, 
                protected service: RecipeService,
                protected ingredientService: IngredientService)  {}
                
            
            $onInit() {
                const id:number = this.$stateParams.recipe_id;
                console.log(this.$stateParams);
                this.ingredientService.listAll().then(res => {
                    this.ingredientsToSelect = res.data
                }).catch(err => console.log(err));
                
                if (id > 0) {
                   this.editRecipe(id);
                }
            }
            
        
            public handleAddComposite = (composite:Composite) => {
                let temp = this.composities.map(comp => {
                    if(comp.ingredient?.id == composite.ingredient?.id) return composite.ingredient?.id;            
                })
                
                if(temp.includes(composite.ingredient?.id)) {
                    return Toastr.warning( "Esse ingrediente já foi adicionado!", "Ops...");
                }                
                this.composities.push(copy(composite));                    
            }
            
            public handleRemoveComposite = (index: number) => {
                this.composities.splice(index, 1);            
            }
            
            public handleAddRecipe = () => {
                this.recipe.composities       = this.composities;
                this.productFinal.origin      = "MANUFACTURED"
                this.productFinal.cost        = this.productFinal?.cost;
                this.productFinal.price       = this.productFinal?.price;
                this.productFinal.discount    = this.productFinal?.discount;
                this.recipe.productFinal      = this.productFinal;
                this.service.saveOne(this.recipe).then(res => {
                    Toastr.success("Receita salva com sucesso!","Feito!");
                    this.$state.go( "Recipes");
                }).catch(err => console.log(err));
            }

            public editRecipe = (id:number) => {   
                this.service.findOne(id).then(res => {
                    this.recipe = res.data;
                    this.productFinal.id = this.recipe.productFinal?.id;           
                    this.productFinal.name = this.recipe.productFinal?.name;           
                    this.productFinal.description = this.recipe.productFinal?.description;           
                    this.productFinal.price = this.recipe.productFinal?.price
                    this.productFinal.cost = this.recipe.productFinal?.cost;
                    this.productFinal.discount = this.recipe.productFinal?.discount;
                    this.composities = this.recipe.composities || [];
                    this.title = "Edição";   
                }).catch(err => console.log(err));
            }
                
        
            public addRecipe = () => {
                this.composities = [];
                this.recipe = {
                    name:""
                };
                this.productFinal = {
                    name:"",
                    price:0,
                    cost:0,
                    discount:0,
                    description:"",
                    type:"FINAL"
                };
            }      
        };
        this.transclude = true;
        this.templateUrl = '../../src/pages/recipe/recipeEdition.html';
        this.controllerAs = 'viewComp';
    }
}

export default RecipeEditionComponent;