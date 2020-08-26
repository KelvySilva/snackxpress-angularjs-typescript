import { IController, IScope, IHttpResponse } from 'angular';
import RecipeService from '../../services/Recipe/RecipeService';
import { Recipe } from '../../models/Recipe';

class RecipeControler implements IController {
    
    static $inject = ['$scope', 'RecipeService'];
    
    public title:string = "Recitas"
    public recipes: Recipe[] = [];

    public constructor(protected $scope: IScope, protected service: RecipeService) {} 

    $onInit() {
        this.service.listAll().then(res => {            
            this.recipes = res.data;
        }).catch(err => {
            console.log(err);            
        });      
    }
}

export default RecipeControler;