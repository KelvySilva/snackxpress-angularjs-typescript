import { IComponentOptions, IController, IScope } from "angular";
import { IStateService, IStateParamsService } from "angular-ui-router";
import OrderService from "../../services/Order/OrderService";
import Toastr from "toastr";
import { Order } from "../../models/Order";

class OrderDetailComponent implements IComponentOptions {

    static NAME: string = 'orderDetailComponent';

    controllerAs: any;
    controller: any;
    templateUrl: any;
    transclude: any;

    constructor() {
        this.controllerAs = 'viewComp';
        this.transclude = true;
        this.templateUrl = '../../src/pages/order/orderDetails.html';
        this.controller =  class OrderDetailComponentController implements IController {

            static $inject: string[] = ['$scope','$state','$stateParams','OrderService'];

            public order: Order = new Order();

            constructor(
                protected $scope: IScope,
                protected $state: IStateService,
                protected $stateParams: IStateParamsService,
                protected service: OrderService
            ){}


            $onInit() {
                const id: number = this.$stateParams.order_id;
                this.service.findOne(id).then(res => {
                    this.order = res.data;
                }).catch(err => {
                    Toastr.error("Algo deu errado!", "Ops...");
                });
            }

            
        }
    }
}

export default OrderDetailComponent;