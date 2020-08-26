import { IController, IScope, IHttpResponse } from 'angular';
import ClientService from '../../services/Client/ClientService';
import { Client } from '../../models/Client';

class ClientControler implements IController {
    
    static $inject = ['$scope', 'ClientService'];
    
    public title:string = "Clientes"
    public clients: Client[] = [];

    public constructor(protected $scope: IScope, protected service: ClientService) {} 

    $onInit() {
        this.service.listAll().then(res => {            
            this.clients = res.data;
        }).catch(err => {
            console.log(err);            
        });      
    }
}

export default ClientControler;