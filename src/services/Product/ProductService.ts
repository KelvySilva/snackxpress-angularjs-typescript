import IService from '../IService';
import { Product } from '../../models/Product';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import { BASE_URL } from '../../environment/constants';

class ProductService implements IService<Product> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Product[]> => {
        return this.$http.get<Product[]>(BASE_URL+"/v1/protected/products");
    }

    public findOne = (id:number): IHttpPromise<Product> => {
        return this.$http.get<Product>(BASE_URL+"/v1/protected/product/"+id);
    }
    public saveOne = (product: Product): IHttpPromise<Product> => {
        return this.$http.post<Product>(BASE_URL+"/v1/admin/product/", product);
    }
    public updateOne = (id:number, product:Product): IHttpPromise<Product> => {
        return this.$http.put<Product>(BASE_URL+"/v1/admin/product/"+id, product);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/product/"+id);
    }
}

export default ProductService;