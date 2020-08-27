import { IController, IScope, IHttpResponse } from 'angular';
import IngredientService from '../../services/Ingredients/IngredientService';
import { Ingredient } from '../../models/Ingredient';
import Toastr from 'toastr';

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

    public handleDeleteIngredient(id:number) {
        this.service.deleteOne(id).then(res => {
            this.ingredients = this.ingredients.filter(ing => {
                if( ing.id != id ) return ing;
            });
            Toastr.success("Deletado com sucesso!", "Pronto!");
        }).catch(err => console.log(err));
    }

    public handleAddIngredient()  {
        
    }
}

export default IngredientControler;