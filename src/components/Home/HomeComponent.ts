import HomeController from "../../controllers/Home/HomeController";
import { IComponentOptions, IScope } from "angular";

class HomeComponent implements IComponentOptions {

    static NAME:string = "homeComponent";    

    controller: any;
    transclude: any;
    templateUrl: any;
    bindings: any;
    template: any;
    controllerAs: any;

    constructor() {
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        this.transclude = true;
        this.controller= class HomeControllerComponent {

            public compNome:string = "HomeComp";
            constructor(protected $scope: IScope) {
                
            }
        };
        this.controllerAs= "homeComp",       
        this.templateUrl = "../../src/pages/home/homeComponent.html";
    }
}

export default HomeComponent;