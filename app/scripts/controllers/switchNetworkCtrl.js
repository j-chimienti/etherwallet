var switchNetworkCtrl = function($scope, $rootScope, globalService) {
    $scope.$watch(
        () => globalService.currentTab,
        (tab, oldTab) => {
            if (!angular.equals(tab, oldTab)) {
                const network = globalFuncs.urlGet("network");

                if (network) {
                    const curNetwork =
                        nodes.nodeList[globalFuncs.getCurNode()].type;

                    if (network.toUpperCase() !== curNetwork.toUpperCase()) {
                        $rootScope.$broadcast(
                            "ChangeNode",
                            globalFuncs.networks[network.toUpperCase()] || 0
                        );
                    }
                }
            }
        }
    );
};

module.exports = switchNetworkCtrl;
