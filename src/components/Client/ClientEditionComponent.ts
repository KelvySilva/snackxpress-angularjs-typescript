import { IComponentOptions, IController, IScope, ITimeoutService } from "angular";
import { IStateService, IStateParamsService } from "angular-ui-router";
import ClientService from "../../services/Client/ClientService";
import { Client } from "../../models/Client";
import Toastr from 'toastr';


class ClientEditionComponent implements IComponentOptions {

    static NAME: string = "clientEditionComponent";

    controllerAs: any;
    controller: any;
    templateUrl: any;
    transclude: any;

    constructor() {
        this.transclude = true;
        this.controllerAs = 'viewComp';
        this.templateUrl = '../../src/pages/client/clientEdition.html';
        this.controller = class ClientEditionComponentController implements  IController{

            static $inject: string[] =  ['$scope','$state','$stateParams','ClientService','$timeout'];

            public client:Client = new Client();

            constructor(
                protected $scope: IScope,
                protected $state: IStateService,
                protected $stateParams: IStateParamsService,
                protected service: ClientService,
                protected $timeout: ITimeoutService
            ) {}

            $onInit() {
                const id: number = this.$stateParams.client_id;
                if(id > 0) {
                    this.service.findOne(id).then(res => {
                        this.client = res.data;
                    }).catch(err => console.log(err));
                }
            }
            
            public handleSaveClient() {
                if(Number(this.client.id) > 0) {
                    this.service.updateOne(Number(this.client.id),this.client).then(res => {
                        Toastr.success('Cliente atualizado com sucesso', 'Feito!');
                        this.$timeout(() => {
                            this.$state.go("Clients");
                        }, 1000);
                    }).catch(err => console.log(err));
                } else {
                    this.service.saveOne(this.client).then(res => {
                        Toastr.success('Cliente salvo com sucesso', 'Feito!');
                        this.$timeout(() => {
                            this.$state.go("Clients");
                        }, 1000);
                    }).catch(err => console.log(err));
                }          
            }
        }

    }
}

export default ClientEditionComponent;