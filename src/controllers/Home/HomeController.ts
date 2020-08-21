
import { IController } from 'angular';

class HomeController implements IController {

    private http :ng.IHttpService;

    public constructor($http:ng.IHttpService) {
        console.log("Alou home");
        this.http = $http;
        
    }

    public getData() : any {
        return {
            message : "Hello Home"
        }
    }

    $onInit() {
        this.getData();
    }
    
}

export default HomeController;