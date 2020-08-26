import IService from '../IService';
import { Recipe } from '../../models/Recipe';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import { BASE_URL } from '../../environment/constants';

class RecipeService implements IService<Recipe> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Recipe[]> => {
        return this.$http.get<Recipe[]>(BASE_URL+"/v1/protected/recipes");
    }

    public findOne = (id:number): IHttpPromise<Recipe> => {
        return this.$http.get<Recipe>(BASE_URL+"/v1/protected/recipe/"+id);
    }
    public saveOne = (recipe: Recipe): IHttpPromise<Recipe> => {
        return this.$http.post<Recipe>(BASE_URL+"/v1/admin/recipe/", recipe);
    }
    public updateOne = (id:number, recipe:Recipe): IHttpPromise<Recipe> => {
        return this.$http.put<Recipe>(BASE_URL+"/v1/admin/recipe/"+id, recipe);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/recipe/"+id);
    }
}

export default RecipeService;