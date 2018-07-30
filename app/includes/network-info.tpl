<div
        ng-if="globalService.currentTab === globalService.tabs.networkInfo.id">

    <h1>{{ajaxReq.type}} Network Info</h1>

    <div ng-switch="ajaxReq.type">

        <div ng-switch-when="CLO">

            <officiality-checker></officiality-checker>
        </div>
    </div>
</div>
