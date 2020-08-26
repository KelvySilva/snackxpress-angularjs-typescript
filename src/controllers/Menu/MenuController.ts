import { IController, IScope } from 'angular';
import MenuService from '../../services/Menu/MenuService';
import { Menu } from '../../models/Menu';

class MenuControler implements IController {
    
    static $inject = ['$scope', 'MenuService'];
    
    public title:string = "Cardápios"
    public menus: Menu[] = [];

    public constructor(protected $scope: IScope, protected service: MenuService) {} 

    $onInit() {
        this.service.listAll().then(res => {            
            this.menus = res.data;
        }).catch(err => {
            console.log(err);            
        });      
    }
}

export default MenuControler;