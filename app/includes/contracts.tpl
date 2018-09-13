<main
    ng-if="globalService.currentTab === globalService.tabs.contracts.id"
    class="tab-pane contracts active"
    ng-controller='contractsCtrl'
    ng-cloak
>

    <article class="modal fade" id="sendContract" tabindex="-1">
        <section class="modal-dialog">

            <form name="sendContractTx" ng-submit="sendTx()" send-contract-tx>
            </form>
        </section>
    </article>

    @@if (site === 'cew' ) { @@include( '../includes/contracts-deploy-modal.tpl', { "site": "cew" } ) }
    @@if (site === 'cx' ) { @@include( '../includes/contracts-deploy-modal.tpl', { "site": "cx" } ) }

    <!-- Title -->
    <div class="block text-center">
        <h2>
            <a translate="NAV_InteractContract" ng-class="{'isActive': visibility === 'interactView'}"
               ng-click="setVisibility('interactView')"> Interact with Contract </a>
            or
            <a translate="NAV_DeployContract" ng-class="{'isActive': visibility === 'deployView'}"
               ng-click="setVisibility('deployView')"> Deploy Contract </a>
        </h2>
    </div>
    <!-- / Title -->


    <!-- Interact Contracts -->

    <div ng-show="visibility === 'interactView'">


        <article class="row block">

            @@if (site === 'cew' ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "cew" } ) }
            @@if (site === 'cx' ) { @@include( '../includes/contracts-interact-1.tpl', { "site": "cx" } ) }

        </article>


        <article class="row block" ng-show="showReadWrite">

            @@if (site === 'cew' ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "cew" } ) }
            @@if (site === 'cx' ) { @@include( '../includes/contracts-interact-2.tpl', { "site": "cx" } ) }

        </article>


        <!-- / Interact Contracts -->

    </div>
    <!-- Deploy Contract -->
    <article class="row block" ng-show="visibility=='deployView'">

        @@if (site === 'cew' ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "cew" } ) }
        @@if (site === 'cx' ) { @@include( '../includes/contracts-deploy-1.tpl', { "site": "cx" } ) }

    </article>
    <!-- / Deploy Contract -->

    <!--wallet decrypt-->
    <article class="form-group"
             ng-show="(!wd && visibility=='deployView') || (!wd && visibility=='interactView' && contract.selectedFunc && !contract.functions[contract.selectedFunc.index].constant)">
        @@if (site === 'cx' ) {
        <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
        }
        @@if (site === 'cew' ) {
        <wallet-decrypt-drtv></wallet-decrypt-drtv>
        }
    </article>

    <article class="col-xs-12" ng-show="contract.selectedFunc!=null && visibility=='interactView'">

        <button class="btn btn-primary btn-block" ng-click="readFromContract()"
                ng-show="contract.functions[contract.selectedFunc.index].constant && showRead">
            <span translate="CONTRACT_Read"> READ</span>
        </button>

        <button class="btn btn-primary btn-block" ng-click="writeToContract()"
                ng-show="!contract.functions[contract.selectedFunc.index].constant">
            <span translate="CONTRACT_Write"> WRITE</span>
        </button>

    </article>

</main>
