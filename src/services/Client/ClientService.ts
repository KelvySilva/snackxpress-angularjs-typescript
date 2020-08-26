import IService from '../IService';
import { Client } from '../../models/Client';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import {BASE_URL} from '../../environment/constants';

class ClientService implements IService<Client> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Client[]> => {
        return this.$http.get<Client[]>(BASE_URL+"/v1/protected/clients");
    }

    public findOne = (id:number): IHttpPromise<Client> => {
        return this.$http.get<Client>(BASE_URL+"/v1/protected/client/"+id);
    }
    public saveOne = (client: Client): IHttpPromise<Client> => {
        return this.$http.post<Client>(BASE_URL+"/v1/admin/client/", client);
    }
    public updateOne = (id:number, client:Client): IHttpPromise<Client> => {
        return this.$http.put<Client>(BASE_URL+"/v1/admin/client/"+id, client);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/client/"+id);
    }
}

export default ClientService;