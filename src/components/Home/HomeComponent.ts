import HomeController from "../../controllers/Home/HomeController";
import { IComponentOptions } from "angular";

class HomeComponent implements IComponentOptions {
    static NAME:string = "Home";
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller= HomeController;
        this.templateUrl = require('../../pages/home/home.html');
    }
}

export default HomeComponent;