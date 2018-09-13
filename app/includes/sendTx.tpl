<main class="tab-pane active"
      ng-if="globalService.currentTab === globalService.tabs.sendTransaction.id"
      ng-controller='sendTxCtrl'
      ng-cloak>

    <div class="alert alert-warning" ng-show="hasQueryString">
        <p translate="WARN_Send_Link">You arrived via a link that has the address, amount, gas or data fields filled in
            for you. You can change any information before sending. Unlock your wallet to get started.</p>
    </div>

    <!-- Unlock Wallet -->
    <article class="collapse-container">

        <div ng-click="wd = !wd">

            <h1>
                 <span
                     style="margin: 0; padding: 0 2px;"
                     class="collapse-button glyphicon"
                     ng-class="wd ? 'glyphicon-plus' : 'glyphicon-minus'"
                 ></span>
                <span
                    translate="NAV_SendEther">
                    Send Ether &amp; Tokens
                </span>
            </h1>
        </div>
        <div ng-show="!wd">
            @@if (site === 'cx' ) {
            <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
            }
            @@if (site === 'cew' ) {
            <wallet-decrypt-drtv></wallet-decrypt-drtv>
            }
        </div>
    </article>


    <!-- Send Tx Content -->
    <article ng-show="wallet!=null">

        @@if (site === 'cew' ) { @@include( './sendTx-content.tpl', { "site": "cew" } ) }
        @@if (site === 'cx' ) { @@include( './sendTx-content.tpl', { "site": "cx" } ) }


    </article>


    <send-tx-modal></send-tx-modal>

</main>
