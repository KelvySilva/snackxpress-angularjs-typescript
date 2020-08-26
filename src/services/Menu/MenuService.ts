import IService from '../IService';
import { Menu } from '../../models/Menu';
import { IHttpService, IHttpResponse, IHttpPromise } from 'angular';
import { BASE_URL } from '../../environment/constants';
import { MenuItem } from '../../models/MenuItem';

class MenuService implements IService<Menu> {

    static $inject = ['$http'];

    constructor(protected $http: IHttpService) {}

    public listAll = () : IHttpPromise<Menu[]> => {
        return this.$http.get<Menu[]>(BASE_URL+"/v1/protected/menus");
    }
   
    public findOne = (id:number): IHttpPromise<Menu> => {
        return this.$http.get<Menu>(BASE_URL+"/v1/protected/menu/"+id);
    }
    public saveOne = (menu: Menu): IHttpPromise<Menu> => {
        return this.$http.post<Menu>(BASE_URL+"/v1/admin/menu/", menu);
    }
    public updateOne = (id:number, menu:Menu): IHttpPromise<Menu> => {
        return this.$http.put<Menu>(BASE_URL+"/v1/admin/menu/"+id, menu);
    }
    public deleteOne = (id:number): IHttpPromise<void> => {
        return this.$http.delete<void>(BASE_URL+"/v1/admin/menu/"+id);
    }

    // MenuItem

    public findOneMenuItem = (id:number) : IHttpPromise<MenuItem[]> => {
        return this.$http.get<MenuItem[]>(BASE_URL+"/v1/protected/menu/item/"+id);
    }

    public updateOneMenuItem = (id:number, menuItem:MenuItem) : IHttpPromise<MenuItem[]> => {
        return this.$http.put<MenuItem[]>(BASE_URL+"/v1/admin/menu/item/"+id, menuItem);
    }



}

export default MenuService;