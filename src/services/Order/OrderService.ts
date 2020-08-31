import IService from '../IService';
import { Order } from '../../models/Order';
import { IHttpService, IHttpPromise, IRequestShortcutConfig } from 'angular';
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
        // const headerDict = {            
        //     'Access-Control-Allow-Origin': '*'
        // }
          
        // const requestOptions = {                                                                                                                                                                                 
        //     headers: new Headers(headerDict), 
        // }; 
        
        return this.$http.put<any>(BASE_URL+"/v1/admin/order/status/"+id+"/"+option,{});
    }
    public updateOne = (id:number, order:Order): IHttpPromise<Order> => {
        return this.$http.put<Order>(BASE_URL+"/v1/admin/order/"+id, order);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/order/"+id);
    }

    private getRCF(): IRequestShortcutConfig {
        return {
            headers : {
                "Access-Control-Allow-Headers":"X-Requested-With",
                "Access-Control-Allow-Origin":"*",
                "User-Agent":"PostmanRuntime/7.26.3"
            }
        }
    }
}

export default OrderService;