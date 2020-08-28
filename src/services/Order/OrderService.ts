import IService from '../IService';
import { Order } from '../../models/Order';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import { BASE_URL } from '../../environment/constants';

class OrderService implements IService<Order> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Order[]> => {
        return this.$http.get<Order[]>(BASE_URL+"/v1/protected/orders");
    }

    public findOne = (id:number): IHttpPromise<Order> => {
        return this.$http.get<Order>(BASE_URL+"/v1/protected/order/"+id);
    }
    public saveOne = (order: Order): IHttpPromise<Order> => {
        return this.$http.post<Order>(BASE_URL+"/v1/admin/order/", order);
    }
    public changeStatus = (id:number, option: string): IHttpPromise<Order> => {
        return this.$http.post<Order>(BASE_URL+"/admin/order/status", {
            saleOrderId: id, option: option
        });
    }
    public updateOne = (id:number, order:Order): IHttpPromise<Order> => {
        return this.$http.put<Order>(BASE_URL+"/v1/admin/order/"+id, order);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/order/"+id);
    }
}

export default OrderService;