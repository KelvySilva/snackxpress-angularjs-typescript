import { IComponentOptions, IController, IScope, ITimeoutService } from "angular";
import { IStateService, IStateParamsService } from "angular-ui-router";
import ProductService from "../../services/Product/ProductService";
import { Product } from "../../models/Product";
import Toastr from 'toastr';


class ProductEdtitionComponent implements IComponentOptions {

    static NAME: string = "productEdtitionComponent";

    controller: any;
    controllerAs: any;
    transclude: any;
    templateUrl: any;

    constructor() {
        this.transclude = true;
        this.controllerAs = 'viewComp'
        this.templateUrl = '../../src/pages/product/productEdition.html';
        this.controller = class ProductEdtitionComponentController implements IController {

            static $inject: string [] = ['$scope','$state', '$stateParams','ProductService', '$timeout'];

            public product: Product = new Product();
            public title: string = '';

            constructor(
                protected $scope: IScope,
                protected $state: IStateService,
                protected $stateParams: IStateParamsService,
                protected service: ProductService,
                protected $timeout: ITimeoutService
            ){}

            $onInit() {               
                const id: number = this.$stateParams.product_id;
                if (id > 0) {
                    this.service.findOne(id).then(res => {
                        this.product = res.data;
                        this.title = this.product.name || '';
                    }).catch(err => console.log(err));
                }else {
                    this.title = "Novo Produto";
                }
            }

            public handleSaveProduct(product:Product) {
                if(Number(product.id) > 0) {
                    this.service.updateOne(Number(product.id), product).then(res => {
                        Toastr.success('Produto atualizado com sucesso', 'Feito!');
                        this.$timeout(() => {
                            this.$state.go("Products");
                        }, 1000);
                    }).catch(err => console.log(err));
                }else {
                    this.service.saveOne(product).then(res => {
                        Toastr.success('Produto salvo com sucesso', 'Feito!');
                        this.$timeout(() => {
                            this.$state.go("Products");
                        }, 1000);
                    }).catch(err => console.log(err));
                }
            }
        }
    }
}

export default ProductEdtitionComponent;