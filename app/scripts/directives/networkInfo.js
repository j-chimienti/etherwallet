"use strict";

module.exports = function networkInfo() {
    return {
        template: require("./networkInfo.html"),
        link: function(scope) {
            scope.explorerOrigin = () => {
                const explorerURL = new URL(ajaxReq.blockExplorerTX);
                return explorerURL.origin;
            };
        }
    };
};
