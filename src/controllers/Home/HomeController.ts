
import { IController, IComponentController } from 'angular';
import HomeComponent from '../../components/Home/HomeComponent';

class HomeController implements IComponentController {

    

    public constructor() {
        console.log("Alou home");        
    }

    public getData() : any {
        return {
            message : "Hello Home"
            
        }
    }

    $onInit() {
        console.log("onInit");
    }
    
}

export default HomeController;