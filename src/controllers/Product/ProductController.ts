import { IController, IScope, IHttpResponse } from 'angular';
import ProductService from '../../services/Product/ProductService';
import { Product } from '../../models/Product';

class ProductControler implements IController {
    
    static $inject = ['$scope', 'ProductService'];
    
    public title:string = "Produtos"
    public products: Product[] = [];

    public constructor(protected $scope: IScope, protected service: ProductService) {} 

    $onInit() {
        this.service.listAll().then(res => {            
            this.products = res.data;
        }).catch(err => {
            console.log(err);            
        });      
    }
}

export default ProductControler;