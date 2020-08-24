import HomeController from "../../controllers/Home/HomeController";
import { IComponentOptions } from "angular";

class HomeComponent implements IComponentOptions {
    // static NAME:string = "HomeComponent";    
    controller: any;
    transclude: any;
    templateUrl: any;
    bindings: any;
    template: any;

    constructor() {
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        // this.transclude = true;
        // this.controller= HomeController;
        this.controller= () => {
            console.log("HomeComponentController")
        };
        this.templateUrl = "../../pages/home/homeComponent.html";
    }
}

export default HomeComponent;