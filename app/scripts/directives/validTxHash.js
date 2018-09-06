"use strict";

module.exports = function validTxHash() {
    return {
        require: "ngModel",
        link: function(scope, element, attr, mCtrl) {
            function validateTxHash(value) {
                if (value.length < 2) {
                    mCtrl.$setValidity("validHash", false);
                } else if (Validator.isValidTxHash(value)) {
                    mCtrl.$setValidity("validHash", true);
                } else {
                    mCtrl.$setValidity("validHash", false);
                }
                return value;
            }

            mCtrl.$parsers.push(validateTxHash);
        }
    };
};
