import { IComponentOptions, IController, IScope, ITimeoutService } from "angular";
import IngredientService from "../../services/Ingredient/IngredientService";
import { IStateParamsService, IStateService } from "angular-ui-router";
import { Ingredient } from "../../models/Ingredient";
import Toastr from "toastr";

class IngredientEditionComponent implements IComponentOptions {

    static NAME:string = "ingredientEditionComponent";

    templateUrl: any;
    controller: any;
    controllerAs: any;
    transclude: boolean;

    constructor() {
        this.templateUrl = "../../src/pages/ingredient/editIngredient.html";
        this.transclude = true;
        this.controllerAs = "viewComp";
        this.controller = class IngredientEditionComponentController implements IController{

            static $inject = ['$scope','IngredientService','$stateParams','$state', '$timeout'];

            public ingredient: Ingredient = new Ingredient();

            constructor(
                protected $scope: IScope, 
                protected service: IngredientService, 
                protected $stateParams: IStateParamsService, 
                protected $state: IStateService,
                protected $timeout: ITimeoutService) {}

            $onInit() {
                const id:number = this.$stateParams.ingredient_id;
               if(id > 0) {
                    this.service.findOne(id).then(res => {
                        this.ingredient = res.data;
                    })
                    .catch(err => console.log(err));
               }
            }

        
            public handleSaveIngredient = (ingredient: Ingredient): void => {
               if(Number(ingredient.id) > 0) {
                this.service.updateOne(Number(ingredient.id), ingredient).then(res => {
                    if(res.status == 200) 
                        Toastr.success("Salvo com sucesso!", "Deu bom!");
                    
                    this.$timeout(() => {
                        this.$state.go("Ingredients");
                    }, 1000)
                }).catch(err => {
                    console.log(err);
                });   
               }else {
            
                this.service.saveOne(ingredient).then(res => {
                    if(res.status == 200) 
                        Toastr.success("Salvo com sucesso!", "Deu bom!");
                    
                    this.$timeout(() => {
                        this.$state.go("Ingredients");
                    }, 1000)
                }).catch(err => {
                    console.log(err);
                });   
               }             
            }

           
        }


        
    }

}

export default IngredientEditionComponent;