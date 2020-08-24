import { IComponentOptions } from "angular";
import ProductControler from "../../controllers/Product/ProductController";

class ProductComponent implements IComponentOptions {
    static NAME:string = "Product";

    controller: any;
    templateUrl:any;
    bindings: any;

    constructor() {
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        this.controller = ProductControler;
        this.templateUrl = require('../../pages/product/product.html');
    }

}

export default ProductComponent;