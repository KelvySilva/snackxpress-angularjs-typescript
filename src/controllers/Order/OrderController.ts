import { IController, IScope } from "angular";
import OrderService from "../../services/Order/OrderService";
import Toastr from 'toastr';
import { Order } from "../../models/Order";


class OrderController implements IController {
    
    static $inject: string[] = ['$scope','OrderService']

    public orders: Order[] = [];
    public title: string = 'Vendas';

    constructor(
        protected $scope: IScope,
        protected service: OrderService
    ){}

    $onInit() {
        this.service.listAll().then(res => {
            this.orders = res.data;
        }).catch(err => {
            Toastr.error("Algo deu errado!", "Ops...");
        });
    }
}

export default OrderController;