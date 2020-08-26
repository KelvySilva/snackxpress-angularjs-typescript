import { IComponentOptions, IScope, IController } from "angular";
import RecipeService from "../../services/Recipe/RecipeService";
import { IStateParamsService } from "angular-ui-router";
import { Recipe } from "../../models/Recipe";
import { Composite } from "../../models/Composite";


class RecipeDetailComponent implements IComponentOptions {

    static NAME: string = "recipeDetailComponent";

    template: any;
    templateUrl: any;
    controller: any;
    controllerAs: any;
    
    constructor() {
        this.controller = class RecipeDetailsController implements IController {

            static $inject:string[] = ['$scope', 'RecipeService', '$stateParams'];

            private recipe: Recipe = new Recipe();
            private title?: string = '';
            private costTotal?: number;

            constructor(protected $scope: IScope, protected service: RecipeService, protected $stateParams: IStateParamsService) {}

            $onInit() {
                const recipe_id:number = this.$stateParams.recipe_id;
                this.service.findOne(recipe_id).then(res => {
                    this.recipe = res.data;
                    this.title = res.data.name;
                    this.costTotal = (this.recipe.composities) && this.recipe.composities
                        .reduce((key:number, value:Composite) => key + ((value.ingredient?.cost || 0) * (value.quantity || 0)), 0);
                }).catch(err => {
                    console.log(err);
                    
                })
            }
        };
        this.controllerAs = 'viewComp';
        this.templateUrl = "../../src/pages/recipe/recipeDetails.html";
    }

}

export default RecipeDetailComponent;