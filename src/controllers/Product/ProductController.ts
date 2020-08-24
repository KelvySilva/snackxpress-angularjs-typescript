import { IController } from 'angular';

import { Product } from '../../models/Product';

class ProductControler implements IController {
    
    public constructor() {
        console.log("Alou Product");
    }

    public getData() : any {
        return {
            message:"hello product"
        }
    }

    $onInit() {
        console.log("onInit");
    }
}

export default ProductControler;