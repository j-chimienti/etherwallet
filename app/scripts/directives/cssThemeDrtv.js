'use strict';

const cssThemeDrtv = function () {


    const localStorageKey = '@css-theme@';

    return {
        restrict: "E",
        template: require('./cssThemeDrtv.html'),
        link: function ($scope) {


            const theme = globalFuncs.localStorage.getItem(localStorageKey, 'day');

            if (['night', 'day'].includes(theme)) {

                $scope.currentTheme = theme;

            } else {

                $scope.currentTheme = 'day';
            }

            angular.element(window).bind('beforeunload', function (theme) {

                globalFuncs.localStorage.setItem(localStorageKey, them);
            });


        }
    };
};
module.exports = cssThemeDrtv;
