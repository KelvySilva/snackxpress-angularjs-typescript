
import { IComponentController, IScope } from 'angular';


class HomeController implements IComponentController {

    private scope:IScope;
    public title: string;

    public constructor($scope: IScope) {
        this.scope = $scope;   
        this.title = "Home"
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