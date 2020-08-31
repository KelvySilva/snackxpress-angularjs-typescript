import { IComponentOptions, IController, IScope, ITimeoutService } from "angular";
import OrderService from "../../services/Order/OrderService";
import { IState, IStateService, IStateParamsService } from "angular-ui-router";
import ClientService from "../../services/Client/ClientService";
import MenuService from "../../services/Menu/MenuService";
import { Client } from "../../models/Client";
import { MenuItem } from "../../models/MenuItem";
import { OrderItem } from "../../models/OrderItem";
import { Menu } from "../../models/Menu";

class OrderCreationComponent implements IComponentOptions {

    public static NAME:string = 'orderCreationComponent';

    controller: any;
    controllerAs:any;
    transclude: any;
    templateUrl:any;

    constructor() {
        this.transclude = true;
        this.controllerAs = 'viewComp';
        this.templateUrl = '../../src/pages/order/orderCreation.html',
        this.controller = class OrderCreationComponentController implements IController {

            static $inject: string[] = ['$scope', '$state' ,'$stateParams','OrderService','ClientService','MenuService', '$timeout']

            public clients:Client[] = [];
            public itemsToSelect:OrderItem[] = [];
            public menus:Menu[] = [];

            constructor(
                protected $scope: IScope,
                protected $state: IStateService,
                protected $stateParams: IStateParamsService,
                protected service: OrderService,
                protected clientService: ClientService,
                protected menuService: MenuService,
                protected $timeout: ITimeoutService
            ){}


            $onInit() {
                this.clientService.listAll().then(res => {
                    this.clients = res.data;
                }).catch(err => {
                    console.log(err);                    
                });

                this.menuService.listAll().then(res => {
                    this.menus = res.data;
                }).catch(err => {
                    console.log(err);                    
                });
                
            }

            public handleSelectMenu($element: any) {
                console.log($element);
                
                this.menuService.findOne($element.menu.id).then(res => {
                    res.data.menuItems?.forEach(item => this.itemsToSelect.push(item));
                }).catch(err => {
                    console.log(err);                    
                })
            } 

        }
    }
}
export default OrderCreationComponent;