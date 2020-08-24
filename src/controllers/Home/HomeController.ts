
import { IController } from 'angular';
import HomeComponent from '../../components/Home/HomeComponent';

class HomeController implements IController {

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