'use strict';

var _debounce = require('lodash/debounce');

var addressFieldDrtv = function ($compile, backgroundNodeService, lookupService) {
    return {
        restrict: "E",
        template: require('./addressFieldDrtv.html'),
        link: function (scope, element, attrs) {


            scope.placeholder = attrs.placeholder || 'mewtopia.eth or 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8'
            scope.labelTranslated = attrs.labeltranslated || 'SEND_addr'
            scope.addressDrtv = {
                showDerivedAddress: false,
                ensAddressField: globalFuncs.urlGet('to', ''),
                derivedAddress: '',
                readOnly: false,
                NAME: '',
            }


            scope.lookupNameDelay = _debounce(lookupName, 400);


            function lookupName(_val) {


                if (lookupService.service !== 'none' && _val && _val.slice(0, 2) !== '0x') {


                    scope.addressDrtv.derivedAddress = `    ⊘ LOADING ${lookupService.service} name`;
                    scope.addressDrtv.NAME = _val;
                    scope.addressDrtv.showDerivedAddress = true;

                    lookupService.lookup(_val).then(result => {


                        scope.$apply(function () {
                            if (!(['0x0000000000000000000000000000000000000000', '0x'].includes(result))) {


                                scope.addressDrtv.derivedAddress = scope.addressDrtv.ensAddressField = ethUtil.toChecksumAddress(result);

                            } else {

                                scope.addressDrtv.derivedAddress = `    ⊘ ERROR: ${lookupService.service} name is not found!`;
                            }
                        })

                    })
                } else {


                    scope.addressDrtv.showDerivedAddress = false;
                }


            }


            // need to wrap var in function so address icon would load upon changes
            scope.getEnsAddr = function () {

                return scope.addressDrtv.ensAddressField;
            };


            scope.$watch('addressDrtv.ensAddressField', scope.lookupNameDelay);

            // when viewing wallet info tab / fire lookup name after unlocking wallet

            scope.$on('lookupName', (event, val) => lookupName(val));


        }
    };
};
module.exports = addressFieldDrtv;
