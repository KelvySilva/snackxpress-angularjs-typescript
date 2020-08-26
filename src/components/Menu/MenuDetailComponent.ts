import { IComponentOptions, IScope, IController } from "angular";
import MenuService from "../../services/Menu/MenuService";
import { IStateParamsService } from "angular-ui-router";
import { Menu } from '../../models/Menu';

class MenuDetailComponent implements IComponentOptions {

    static NAME:string = "menuDetailComponent";

    controller: any;
    controllerAs: any;
    templateUrl: any;
    bindings: any;
    transclude: any;
    template: any;

    constructor(){
        this.bindings = {
            textBinding: '@',
            dataBinding: '<',
            functionBinding: '&'
        };
        this.transclude = true;        
        this.controller = class MenuDetailController implements IController{

            static $inject:string[] = ['$scope', 'MenuService', '$stateParams'];
            
            public menu: Menu = new Menu();
            public title?: string = '';

            constructor(protected $scope: IScope,protected service: MenuService, protected $stateParams: IStateParamsService) {}
            
            $onInit() {
                const menu_id:number = this.$stateParams.menu_id;
                this.service.findOne(menu_id).then((res:any) => {
                    this.menu = res.data;
                    this.title = this.menu.name;
                }).catch((err:any) => {
                    console.log(err);                    
                })
            }
        },
        this.controllerAs = "viewComp";
        this.templateUrl = "../../src/pages/menu/menuDetails.html";
    }

}

export default MenuDetailComponent;