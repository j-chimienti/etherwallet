"use strict";

module.exports = function swapInitForm() {
    return {
        template: require("./swapInitForm.html"),
        require: "form",
        link: function(scope, e, attrs, form) {
            form.fromVal.$validators.validValue = form.toVal.$validators.validValue =
                Validator.isPositiveNumber;
            scope._showConversionRatio = () => {
                return (
                    scope.swapOrder.fromVal !== null &&
                    isFinite(scope.swapOrder.fromVal) &&
                    isFinite(scope.swapOrder.toVal)
                );
            };
        }
    };
};
