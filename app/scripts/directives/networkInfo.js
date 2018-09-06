"use strict";

module.exports = function networkInfo() {
    return {
        template: require("./networkInfo.html"),
        link: function(scope) {
            const explorerURL = new URL(ajaxReq.blockExplorerTX);
            scope.explorerOrigin = explorerURL.origin;
        }
    };
};
