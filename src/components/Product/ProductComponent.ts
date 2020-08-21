import { IComponentOptions } from "angular";
import ProductControler from "../../controllers/Product/ProductController";

class ProductComponent implements IComponentOptions {
    static NAME:string = "Product";

    controller: any;
    templateUrl:any;

    constructor() {
        this.controller = ProductControler;
        this.templateUrl = require('../../pages/product/product.html');
    }

}

export default ProductComponent;