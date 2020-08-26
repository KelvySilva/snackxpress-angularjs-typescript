import { IController, IScope, IHttpResponse } from 'angular';
import IngredientService from '../../services/Ingredients/IngredientService';
import { Ingredient } from '../../models/Ingredient';

class IngredientControler implements IController {
    
    static $inject = ['$scope', 'IngredientService'];
    
    public title:string = "Ingredientes"
    public ingredients: Ingredient[] = [];

    public constructor(protected $scope: IScope, protected service: IngredientService) {} 

    $onInit() {
        this.service.listAll().then(res => {            
            this.ingredients = res.data;
        }).catch(err => {
            console.log(err);            
        });      
    }
}

export default IngredientControler;