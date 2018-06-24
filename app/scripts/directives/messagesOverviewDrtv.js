'use strict';

var messagesOverviewDrtv = function (globalService, newMessageService) {
    return {
        restrict: "E",
        template: require('./messagesOverviewDrtv.html'),
        link: function ($scope) {


            $scope.newMessageService = newMessageService;

            $scope.viewMessageList = function viewMessageList() {

                globalService.currentTab = globalService.tabs.messages.id;
                location.hash = globalService.tabs.messages.url;
            }
        }
    };
};
module.exports = messagesOverviewDrtv;
