"use strict";

module.exports = function(walletService) {
    return {
        template: require("./balances.html"),
        link: function(scope) {
            scope.coinPriceService = window.coinPriceService;
            //scope.walletService = walletService;

            scope.totals = function() {
                const arr = scope
                    .toArray(scope.alternativeBalance)
                    .filter(item => {
                        return (
                            scope.coinPriceService.coinPrices.hasOwnProperty(
                                item.symbol.toUpperCase()
                            ) &&
                            scope.coinPriceService.coinPrices[
                                item.symbol.toUpperCase()
                            ].hasOwnProperty("usd")
                        );
                    });

                const total_usd = arr.reduce(
                    (total, item) =>
                        total +
                        scope.coinPriceService.coinPrices[
                            item.symbol.toUpperCase()
                        ].usd *
                            +item.balance,
                    0
                );
                const total_btc = arr.reduce(
                    (total, item) =>
                        total +
                        scope.coinPriceService.coinPrices[
                            item.symbol.toUpperCase()
                        ].btc *
                            +item.balance,
                    0
                );

                return {
                    total_usd,
                    total_btc
                };
            };
        }
    };
};
