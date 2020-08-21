import { IController } from 'angular';

class ProductControler implements IController {
    private http: ng.IHttpService;
    public constructor($http: ng.IHttpService) {
        console.log("Alou Product");
        this.http = $http;        
    }    

    public getData() : any {
        return {
            message:"hello product"
        }
    }

    $onInit() {
        this.getData();
    }
}

export default ProductControler;