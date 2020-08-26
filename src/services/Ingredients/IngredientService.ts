import IService from '../IService';
import { Ingredient } from '../../models/Ingredient';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import { BASE_URL } from '../../environment/constants';

class IngredientService implements IService<Ingredient> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Ingredient[]> => {
        return this.$http.get<Ingredient[]>(BASE_URL+"/v1/protected/ingredients");
    }

    public findOne = (id:number): IHttpPromise<Ingredient> => {
        return this.$http.get<Ingredient>(BASE_URL+"/v1/protected/ingredient/"+id);
    }
    public saveOne = (ingredient: Ingredient): IHttpPromise<Ingredient> => {
        return this.$http.post<Ingredient>(BASE_URL+"/v1/admin/ingredient/", ingredient);
    }
    public updateOne = (id:number, ingredient:Ingredient): IHttpPromise<Ingredient> => {
        return this.$http.put<Ingredient>(BASE_URL+"/v1/admin/ingredient/"+id, ingredient);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/ingredient/"+id);
    }
}

export default IngredientService;