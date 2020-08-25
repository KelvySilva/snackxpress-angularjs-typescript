
import { IScope, IController } from 'angular';


class HomeController implements IController {

    
    public nome:string = "Home";
    
    static $inject = ['$scope'];
    constructor(protected $scope: IScope) {
        
    }

    public getData() : any {
        return {
            message : "Hello Home"
            
        }
    }

    $onInit() {
        console.log("onInit: "+this.nome);
    }
    
}

export default HomeController;