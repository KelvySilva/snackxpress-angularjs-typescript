import { IComponentOptions } from "angular";
import ProductControler from "../../controllers/Product/ProductController";

class ProductComponent implements IComponentOptions {
    
    static NAME:string = "ProductComponent";

    controller: any;
    templateUrl:any;
    bindings: any;
    transclude: any;
    template:any;

    constructor() {
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        // this.transclude = true;
        this.controller = ProductControler;
        this.templateUrl = require("../../pages/product/product.html");
    }

}

export default ProductComponent;