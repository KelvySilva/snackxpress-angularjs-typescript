import IService from '../IService';
import { Product } from '../../models/Product';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';

class ProductService implements IService<Product> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Product[]> => {
        return this.$http.get<Product[]>("http://127.0.0.1:8082/v1/protected/products");
    }

    public findOne = (id:number): IHttpPromise<Product> => {
        return this.$http.get<Product>("http://127.0.0.1:8082/v1/protected/product/"+id);
    }
    public saveOne = (product: Product): IHttpPromise<Product> => {
        return this.$http.post<Product>("", product).then((res:IHttpResponse<Product>) => res.data).catch((err:any) => err);
    }
    public updateOne = (id:number, product:Product): IHttpPromise<Product> => {
        return this.$http.put<Product>(""+id, product).then((res:IHttpResponse<Product>) => res.data).catch((err:any) => err);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(""+id).then((res:any) => res.data).catch((err:Error) => err);
    }
}

export default ProductService;