
import { IScope, IController } from 'angular';


class HomeController implements IController {

    
    public title:string = "Seja bem vindo!";
    
    static $inject = ['$scope'];
    constructor(protected $scope: IScope) {
        
    }

    $onInit() {
        console.log("Home Init");
    }
    
}

export default HomeController;