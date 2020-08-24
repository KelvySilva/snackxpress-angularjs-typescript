import { IController, IComponentController } from 'angular';

import { Product } from '../../models/Product';

class ProductControler implements IComponentController {
    
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