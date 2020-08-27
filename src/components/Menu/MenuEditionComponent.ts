import { IComponentOptions, IController, IScope, copy, ITimeoutService } from "angular";
import { Menu } from "../../models/Menu";
import { MenuItem } from "../../models/MenuItem";
import MenuService from "../../services/Menu/MenuService";
import { IStateParamsService, IStateService } from "angular-ui-router";
import ProductService from "../../services/Product/ProductService";
import Toastr from 'toastr';
import { Product } from "../../models/Product";

class MenuEditionComponent implements IComponentOptions {

    static NAME: string = "menuEditionComponent";

    templateUrl: any;
    controller: any;
    controllerAs: any;
    transclude: any;

    constructor() {
        this.transclude = true;
        this.controllerAs = 'viewComp';
        this.templateUrl = '../../src/pages/menu/menuEdition.html';
        this.controller = class MenuEditionComponentController implements IController {

            static $inject:string[] = ['$scope','MenuService','$stateParams','ProductService','$timeout','$state'];

            public menu: Menu = new Menu();
            public menuItems: MenuItem[] = [];
            public item: MenuItem = new MenuItem();
            public productsToSelect: Product[] = [];
            public title: string = '';

            constructor(
                protected $scope: IScope,
                protected service: MenuService,
                protected $stateParams: IStateParamsService,
                protected productService: ProductService,
                protected $timeout: ITimeoutService,
                protected $state: IStateService                 
                ) {}


            $onInit() {
                this.productService.listAll().then(res => {
                    this.productsToSelect = res.data;
                }).catch(err => console.log(err));

                const id:number = this.$stateParams.menu_id;
                if(id > 0) {
                    this.editMenu(id);
                }
            }

            public editMenu = (id:number) => {
                 
                this.title = "Cardápios";   
                this.service.findOne(id).then(res => {
                    this.menu = res.data;
                    this.menuItems = this.menu.menuItems || [];
                    this.title = "Edição:";                   
                }).catch(err => console.log(err));
            }

            public handleAddProdToList = (productToSelect:Product) => {
                this.item.productList?.push(copy(productToSelect));
            }
        
            public handleRemoveProdToList = (index: number) => {
                this.item.productList?.splice(index, 1);            
            }
            
            public handleRemoveItem = (index: number) => {
                this.menuItems.splice(index, 1);            
            }
            public handleAddProdListToMenuItem = (item:number) => {      
                console.log(item);  
        
                
                this.item.total = 0;
                this.item.subtotal = 0;
                this.item.discountAmount = this.item.discountAmount;
        
                this.menuItems.push(copy(this.item));
                
                this.item.discountAmount = 0;
                this.item.category = "";
                this.item.productList = [];     
            }
        
            public handleSaveMenu = () => {
                this.menuItems = this.menuItems.map(menuItem => {
                    menuItem.total = 0;
                    menuItem.subtotal = 0;
                    return menuItem;
                })
                this.menu.menuItems = this.menuItems;
                this.service.saveOne(this.menu).then(res => {
                    Toastr.success( "Cardápio salvo com sucesso!", "Feito!");
        
                    this.$timeout(() => {
                        this.$state.go("Menus")
                    }, 2000)
        
                }).catch(err => console.log(err));
                
            }
        
            public handleEditMenuItem = (item_id:number) => {
                let path = "/menu/edit/"+this.menu.id+"/item/"+item_id;
                console.log(path);
                this.$state.go(path);
            }
        }
    }
}

export default MenuEditionComponent;