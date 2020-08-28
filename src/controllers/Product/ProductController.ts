import { IController, IScope, IHttpResponse } from 'angular';
import ProductService from '../../services/Product/ProductService';
import { Product } from '../../models/Product';
import Toastr from 'toastr';

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

    public handleDeleteProduct(id: number) {
        
        this.service.deleteOne(id).then(res => {
            this.products = this.products.filter(prod => {
                if( prod.id != id ) return prod;
            });
            Toastr.success("Deletado com sucesso!", "Pronto!");
        }).catch(err => {
            Toastr.error("A operação causou o erro "+err.data.detail, "Ops...!");
        });
    }

   
}

export default ProductControler;