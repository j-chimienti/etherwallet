"use strict";
const BigNumber = require("bignumber.js");

module.exports = function TxStatusController($http, $scope) {
    $scope.checkTxPage = true;
    $scope.checkTxReadOnly = true;
    $scope.txStatus = {
        found: 0,
        notFound: 1,
        mined: 2
    };
    $scope.txInfo = {
        status: null, // notFound foundInPending foundOnChain
        hash:
            globalFuncs.urlGet("txHash", null) ||
            globalFuncs.urlGet("tx", null),
        from: "",
        to: "",
        value: "",
        valueStr: "",
        gasLimit: "",
        gasPrice: "",
        data: "",
        nonce: ""
    };

    function txToObject(tx) {
        const txStatus = $scope.txStatus;
        if (tx) {
            $scope.txInfo = Object.assign({}, tx, {
                _status:
                    tx.status === "0x0"
                        ? "failed"
                        : tx.status === "0x1"
                            ? "succeeded"
                            : "unknown",
                status: tx.blockNumber ? txStatus.mined : txStatus.found,
                hash: tx.hash,
                from: ethUtil.toChecksumAddress(tx.from),
                to: tx.to ? ethUtil.toChecksumAddress(tx.to) : "",
                value: new BigNumber(tx.value).toString(),
                gasLimit: new BigNumber(tx.gas).toString(),
                gasPrice: {
                    wei: new BigNumber(tx.gasPrice).toString(),
                    gwei: new BigNumber(tx.gasPrice)
                        .div(etherUnits.getValueOfUnit("gwei"))
                        .toString(),
                    eth: etherUnits.toEther(tx.gasPrice, "wei")
                },
                data: tx.input === "0x" ? "" : tx.input,
                nonce: new BigNumber(tx.nonce).toString()
            });
        } else {
            $scope.txInfo.status = txStatus.notFound;
        }
    }

    $scope.checkTxStatus = function() {
        const { hash } = $scope.txInfo;

        if (!Validator.isValidTxHash(hash)) {
            uiFuncs.notifier.danger(globalFuncs.errorMsgs[36]);
        } else {
            ajaxReq.getTransaction(hash, function(data) {
                if (data.error) $scope.notifier.danger(data.msg);
                else {
                    txToObject(data.data);
                }
            });
        }
    };

    if ($scope.txInfo.hash) {
        $scope.checkTxStatus();
    }
};
