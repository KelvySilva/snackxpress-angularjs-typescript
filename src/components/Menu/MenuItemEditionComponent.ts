import { IComponentOptions, IController, IScope, ITimeoutService } from "angular";
import { IStateService, IStateParamsService } from "angular-ui-router";
import MenuService from "../../services/Menu/MenuService";
import { MenuItem } from "../../models/MenuItem";
import Toastr from 'toastr';


class MenuItemEditionComponent implements IComponentOptions {

    static NAME: string = "menuItemEditionComponent";

    controller:any;
    controllerAs: any;
    transclude: any;
    templateUrl: any;

    constructor() {
        this.templateUrl = '../../src/pages/menu/menuItemEdition.html';
        this.controllerAs = 'viewComp';
        this.transclude = true;
        this.controller = class MenuItemEditionComponentController implements IController {

            static $inject: string[] = ['$scope','$state','$stateParams', 'MenuService','$timeout'];

            public menuItem: MenuItem = new MenuItem();

            constructor(
                protected $scope: IScope,
                protected $state: IStateService,
                protected $stateParams: IStateParamsService,
                protected service: MenuService,
                protected $timeout: ITimeoutService
            ) {}

            $onInit() {
                const menu_item_id  = this.$stateParams.menu_item_id;
                this.service.findOneMenuItem(menu_item_id).then(res => {
                    this.menuItem = res.data;
                    console.log(this.menuItem);                    
                }).catch(err => console.log(err));
            }

        
            public handleSaveMenuItem = () => {
                const menu_id  = this.$stateParams.menu_id;
                this.menuItem.total = 0;
                this.menuItem.subtotal = 0;
                this.service.updateOneMenuItem(Number(this.menuItem.id),this.menuItem).then(res => {
                    Toastr.success( "Item atualizado com sucesso!", "Feito!");
                    this.$timeout(() => {
                        this.$state.go("MenuEdition", {
                            menu_id: menu_id
                        });
                    }, 1000);
                }).catch(err => console.log(err));
            }
        }
    }
}

export default MenuItemEditionComponent;