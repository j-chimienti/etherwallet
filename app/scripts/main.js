"use strict";
require("./localStoragePolyfill");
var IS_CX = false;
if (typeof chrome != "undefined")
    IS_CX = chrome.windows === undefined ? false : true;
var angular = require("angular");
var angularTranslate = require("angular-translate");
var angularTranslateErrorLog = require("angular-translate-handler-log");
var angularSanitize = require("angular-sanitize");
var angularAnimate = require("angular-animate");
var bip39 = require("bip39");
var HDKey = require("hdkey");
window.hd = { bip39: bip39, HDKey: HDKey };
var BigNumber = require("bignumber.js");
window.BigNumber = BigNumber;
var marked = require("./staticJS/customMarked");
window.marked = marked;
var ethUtil = require("ethereumjs-util");
ethUtil.crypto = require("crypto");
ethUtil.Tx = require("ethereumjs-tx");
ethUtil.scrypt = require("scryptsy");
ethUtil.uuid = require("uuid");
ethUtil.solidityCoder = require("./solidity/coder");
ethUtil.solidityUtils = require("./solidity/utils");
ethUtil.WAValidator = require("wallet-address-validator");
window.ethUtil = ethUtil;
var format = require("string-format");
window.format = format;
var browser = require("detect-browser");
window.browser = browser;

// fixme: window variables should be accessed as services for dependency injection

// we can keep winow vars for useage in conosole, but pain to keep handling order right

var nodes = require("./nodes");
window.nodes = nodes;

const coinPrice = require("./coinPrice");

window._coinPrice = coinPrice;

var Wallet = require("./myetherwallet");
window.Wallet = Wallet;
var Web3Wallet = require("./web3Wallet");
window.Web3Wallet = Web3Wallet;
var Token = require("./tokenlib");
window.Token = Token;
var globalFuncs = require("./globalFuncs");
window.globalFuncs = globalFuncs;
var uiFuncs = require("./uiFuncs");
window.uiFuncs = uiFuncs;
var etherUnits = require("./etherUnits");
window.etherUnits = etherUnits;
var ajaxReq = require("./ajaxReq");
window.ajaxReq = ajaxReq;

var ethFuncs = require("./ethFuncs");
window.ethFuncs = ethFuncs;
var Validator = require("./validator");
window.Validator = Validator;

var changeNow = require("./changeNow");

window.changeNow = changeNow;

var ens = require("./ens");
window.ens = ens;
var translate = require("./translations/translate.js");

if (IS_CX) {
    var cxFuncs = require("./cxFuncs");
    window.cxFuncs = cxFuncs;
} else {
    var u2f = require("./staticJS/u2f-api");
    var ledger3 = require("./staticJS/ledger3");
    var ledgerEth = require("./staticJS/ledger-eth");
    var trezorConnect = require("./staticJS/trezorConnect");
    var digitalBitboxUsb = require("./staticJS/digitalBitboxUsb");
    var digitalBitboxEth = require("./staticJS/digitalBitboxEth");
    window.u2f = u2f;
    window.Ledger3 = ledger3;
    window.ledgerEth = ledgerEth;
    window.TrezorConnect = trezorConnect.TrezorConnect;
    window.DigitalBitboxUsb = digitalBitboxUsb;
    window.DigitalBitboxEth = digitalBitboxEth;
}
var CustomGasMessages = require("./customGas.js");
window.CustomGasMessages = CustomGasMessages;

// CONTROLLERS

var tabsCtrl = require("./controllers/tabsCtrl");
var viewCtrl = require("./controllers/viewCtrl");
var coldStakingCtrl = require("./controllers/coldStakingCtrl");
var walletGenCtrl = require("./controllers/walletGenCtrl");
var bulkGenCtrl = require("./controllers/bulkGenCtrl");
var decryptWalletCtrl = require("./controllers/decryptWalletCtrl");
var viewWalletCtrl = require("./controllers/viewWalletCtrl");
var txStatusCtrl = require("./controllers/txStatusCtrl");
var sendTxCtrl = require("./controllers/sendTxCtrl");
var swapCtrl = require("./controllers/swapCtrl");
var signMsgCtrl = require("./controllers/signMsgCtrl");
var contractsCtrl = require("./controllers/contractsCtrl");
var broadcastTxCtrl = require("./controllers/broadcastTxCtrl");
var ensCtrl = require("./controllers/ensCtrl");
var dexnsCtrl = require("./controllers/dexnsCtrl");
var footerCtrl = require("./controllers/footerCtrl");
var offlineTxCtrl = require("./controllers/offlineTxCtrl");
var walletBalanceCtrl = require("./controllers/walletBalanceCtrl");
var backgroundNodeCtrl = require("./controllers/backgroundNodeCtrl");
var encryptCtrl = require("./controllers/encryptCtrl");
var helpersCtrl = require("./controllers/helpersCtrl");
var messagesControl = require("./controllers/messagesCtrl");
var switchNetworkCtrl = require("./controllers/switchNetworkCtrl");

// SERVICES

var lookupService = require("./services/lookup");
var globalService = require("./services/globalService");
var coldStakingService = require("./services/coldStakingService");
var modalService = require("./services/modalService");
var walletService = require("./services/walletService");
var messageService = require("./services/messageService");
var dexnsService = require("./services/dexnsService");
var backgroundNodeService = require("./services/backgroundNodeService");

// DIRECTIVES
var officialityChecker = require("./directives/officiality-checker");
var lookup = require("./directives/crosschain-lookup");
var dexnsNameDisplay = require("./directives/dexns-name-display");
var blockiesDrtv = require("./directives/blockiesDrtv");
var addressFieldDrtv = require("./directives/addressFieldDrtv");
var QRCodeDrtv = require("./directives/QRCodeDrtv");
var walletDecryptDrtv = require("./directives/walletDecryptDrtv");
var messagesOverviewDrtv = require("./directives/messagesOverviewDrtv");
var cssThemeDrtv = require("./directives/cssThemeDrtv");
var cxWalletDecryptDrtv = require("./directives/cxWalletDecryptDrtv");
var fileReaderDrtv = require("./directives/fileReaderDrtv");
var transactionCost = require("./directives/transactionCostDtrv");
var balanceDrtv = require("./directives/balanceDrtv");
var arrayInputDrtv = require("./directives/arrayInputDrtv");
var newMessagesDrtv = require("./directives/newMessagesDrtv");
const sendTransactionFormDrtv = require("./directives/sendTransactionForm");
const dexnsTokenRegistrationForm = require("./directives/dexns-token-registration");
if (IS_CX) {
    var addWalletCtrl = require("./controllers/CX/addWalletCtrl");
    var cxDecryptWalletCtrl = require("./controllers/CX/cxDecryptWalletCtrl");
    var myWalletsCtrl = require("./controllers/CX/myWalletsCtrl");
    var mainPopCtrl = require("./controllers/CX/mainPopCtrl");
    var quickSendCtrl = require("./controllers/CX/quickSendCtrl");
}

var app = angular.module("mewApp", [
    "pascalprecht.translate",
    "ngSanitize",
    "ngAnimate"
]);
app.config([
    "$compileProvider",
    function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(
            /^\s*(|blob|https|mailto):/
        );
    }
]);
app.config([
    "$translateProvider",
    function($translateProvider) {
        $translateProvider.useMissingTranslationHandlerLog();
        new translate($translateProvider);
    }
]);
app.config([
    "$animateProvider",
    function($animateProvider) {
        $animateProvider.classNameFilter(/^no-animate$/);
    }
]);
app.factory("globalService", [
    "$http",
    "$httpParamSerializerJQLike",
    globalService
]);
app.factory("walletService", walletService);
app.factory("backgroundNodeService", backgroundNodeService);

app.factory("changeNowService", changeNow);
app.factory("modalService", modalService);

app.factory("messageService", messageService);

app.factory("dexnsService", dexnsService);

app.factory("lookupService", ["dexnsService", lookupService]);

app.factory("messageService", messageService);
app.factory("coldStakingService", ["walletService", coldStakingService]);

app.directive("sendTransactionForm", sendTransactionFormDrtv);
app.directive("officialityChecker", [officialityChecker]);
app.directive("dexnsTokenRegistrationForm", dexnsTokenRegistrationForm);
app.directive("dexnsNameDisplay", [
    "dexnsService",
    "walletService",
    "globalService",
    dexnsNameDisplay
]);
app.directive("eosKeypair", require("./directives/eos-keypair"));
app.directive("lookup", ["$rootScope", "lookupService", lookup]);
app.directive("blockieAddress", blockiesDrtv);
app.directive("cssThemeDrtv", cssThemeDrtv);
app.directive("addressField", ["lookupService", addressFieldDrtv]);
app.directive("qrCode", QRCodeDrtv);
app.directive("onReadFile", fileReaderDrtv);
app.directive("walletBalanceDrtv", ["walletService", "$timeout", balanceDrtv]);
app.directive("walletDecryptDrtv", walletDecryptDrtv);
app.directive("cxWalletDecryptDrtv", cxWalletDecryptDrtv);
app.directive("messagesOverviewDrtv", [
    "globalService",
    "walletService",
    "messageService",
    messagesOverviewDrtv
]);
app.directive("arrayInputDrtv", arrayInputDrtv);
app.directive("newMessagesDrtv", ["globalService", newMessagesDrtv]);
app.directive("transactionCost", [transactionCost]);

app.controller("tabsCtrl", [
    "$http",
    "$rootScope",
    "$scope",
    "globalService",
    "walletService",
    "$translate",
    "$sce",
    tabsCtrl
]);
app.controller("switchNetworkCtrl", [
    "$scope",
    "$rootScope",
    "globalService",
    switchNetworkCtrl
]);
app.controller("viewCtrl", ["$scope", "globalService", "$sce", viewCtrl]);
app.controller("walletGenCtrl", ["$rootScope", "$scope", walletGenCtrl]);
app.controller("bulkGenCtrl", ["$scope", bulkGenCtrl]);
app.controller("decryptWalletCtrl", [
    "$rootScope",
    "$scope",
    "$sce",
    "walletService",
    "globalService",
    decryptWalletCtrl
]);
app.controller("viewWalletCtrl", [
    "$scope",
    "$rootScope",
    "walletService",
    "coldStakingService",
    viewWalletCtrl
]);
app.controller("txStatusCtrl", ["$scope", "$rootScope", txStatusCtrl]);
app.controller("sendTxCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    sendTxCtrl
]);

app.controller("swapCtrl", [
    "$scope",
    "$rootScope",
    "$interval",
    "walletService",
    swapCtrl
]);
app.controller("signMsgCtrl", ["$scope", "$sce", "walletService", signMsgCtrl]);
app.controller("contractsCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    contractsCtrl
]);
app.controller("ensCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    ensCtrl
]);
app.controller("dexnsCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    "backgroundNodeService",
    "dexnsService",
    dexnsCtrl
]);
app.controller("footerCtrl", ["$scope", footerCtrl]);
app.controller("offlineTxCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    offlineTxCtrl
]);
app.controller("walletBalanceCtrl", [
    "$scope",
    "$sce",
    "walletService",
    "backgroundNodeService",
    "modalService",
    "coldStakingService",
    "messageService",
    walletBalanceCtrl
]);
app.controller("helpersCtrl", ["$scope", helpersCtrl]);
app.controller("messagesCtrl", [
    "$scope",
    "$rootScope",
    "$interval",
    "globalService",
    "messageService",
    "walletService",
    "backgroundNodeService",
    messagesControl
]);
app.controller("encryptCtrl", ["$scope", "walletService", encryptCtrl]);
app.controller("backgroundNodeCtrl", [
    "$scope",
    "$interval",
    "backgroundNodeService",
    backgroundNodeCtrl
]);

app.controller("broadcastTxCtrl", ["$scope", broadcastTxCtrl]);

app.controller("coldStakingCtrl", [
    "$scope",
    "$rootScope",
    "walletService",
    "modalService",
    "coldStakingService",
    coldStakingCtrl
]);
if (IS_CX) {
    app.controller("addWalletCtrl", ["$scope", "$sce", addWalletCtrl]);
    app.controller("myWalletsCtrl", [
        "$scope",
        "$sce",
        "walletService",
        myWalletsCtrl
    ]);
    app.controller("mainPopCtrl", ["$scope", "$sce", mainPopCtrl]);
    app.controller("quickSendCtrl", ["$scope", "$sce", quickSendCtrl]);
    app.controller("cxDecryptWalletCtrl", [
        "$scope",
        "$sce",
        "walletService",
        cxDecryptWalletCtrl
    ]);
}
