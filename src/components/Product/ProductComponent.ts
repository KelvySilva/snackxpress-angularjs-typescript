import { IComponentOptions, IScope } from "angular";

class ProductComponent implements IComponentOptions {
    
    static NAME:string = "productComponent";

    controller: any;
    templateUrl:any;
    bindings: any;
    transclude: any;
    template:any;
    controllerAs: any;

    constructor() {
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        this.transclude = true;
        this.controller = class ProductControlerComponent {
            static $inject = ['$scope'];
            public compNome: string = "prodComp";
            constructor(protected $scope: IScope) {

            }
        };
        this.controllerAs = 'prdComp'
        this.templateUrl = "../../src/pages/product/productComponent.html";
    }

}

export default ProductComponent;